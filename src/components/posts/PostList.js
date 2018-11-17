import React from 'react'
import PostSummary from './PostSummary';

const PostList = () => {
    return (
        <div className="post-list section">
            <PostSummary />
            <PostSummary />
            <PostSummary />
        </div>
    )
}

export default PostList