import React from 'react'

const PostSummary = ({post}) => {
    return (
        <div className="card z-depth-0 post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <p>Posted by Esmerlin Joel.</p>
                <p className="grey-text"> 16th November, 11pm</p>
            </div>
        </div>
    )
}

export default PostSummary