import React from 'react'

const PostDetails = (props) => {
    const id = props.match.params.id
  return (
    <div className="container section post-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Post Title - {id}</span>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Esmerlin Joel.</div>
                <div>16th November, 11pm</div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails
