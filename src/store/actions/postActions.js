/**
 * Return action on create post
 * @param {*} post 
 * @exports createPost
 */
export const createPost = (post) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_POST', post})
    }
} 