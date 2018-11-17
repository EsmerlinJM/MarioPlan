import React, { Component } from 'react';
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
class Dashboard extends Component {
    render() {
        const { posts } = this.props 
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList posts={posts}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
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
        posts: state.post.posts
    }
} 

/**
 * Export dashboard connected with state
 * @function connect()()
 * @param {Object} state
 * @param {*} Component
 * @exports Dashboard
 */
export default connect(mapStateToProps)(Dashboard)