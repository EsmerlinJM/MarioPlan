import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const PostDetails = (props) => {
    const { post } = props
    const postContent = post ? (
        <div className="container section post-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{ post.title }</span>
                    <p>{ post.content }</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by { post.authorFirstName } { post.authorLastName }</div>
                    <div>{ moment(post.createdAt.toDate()).calendar() }</div>
                </div>
            </div>
        </div>  
        
    ) : (
        <div className="container center">
             <p>Loading posts...</p>
            <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                <div class="circle"></div>
                </div><div class="gap-patch">
                <div class="circle"></div>
                </div><div class="circle-clipper right">
                <div class="circle"></div>
                </div>
            </div>   
            </div>
        </div>
    )
    return (
        <div>
            { postContent }
        </div> 
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const posts = state.firestore.data.posts
    const post = posts ? posts[id] : null
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails)
