import React, { Component } from 'react';
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Dashboard extends Component {
    render() {
        const { posts, notifications } = this.props 
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList posts={posts}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Return posts properties maped for the state
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        notifications: state.firestore.ordered.notifications
    }
} 

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)