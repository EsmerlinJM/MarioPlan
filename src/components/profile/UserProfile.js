import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const UserProfile = (props) => {
    const { user, auth } = props
    if(!auth.uid) return <Redirect to='/signin'/>
    const userProfile = user ? (
        <div className="container section post-details">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="right btn-large btn-floating red lighten-1">{ user.initials }</span>
                            <span className="card-title">{ user.firstName } { user.lastName }</span>
                            <span className="grey-text">Posts: 35</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m5 offset-m1">
                        <div className="section">
                            <div className="card z-depth-0">
                                <div className="card-content">
                                    <span className="card-title">Posts Created</span>
                                    <ul className="notifications">
                                        <li>
                                            <span className="pink-text">Title post </span>
                                            <span>content</span>
                                            <div className="grey-text note-date">
                                                15 min
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>    
        </div> 
        
    ) : (
        <div className="container center">
             <p>Loading user...</p>
        </div>
    )
    return (
        <div>
            { userProfile }
        </div> 
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const users = state.firestore.data.users
    const user = users ? users[id] : null
    const posts = state.firestore.data.posts
    
    return {
        user: user,
        posts: posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' },
        { collection: 'posts' }
    ])
)(UserProfile)