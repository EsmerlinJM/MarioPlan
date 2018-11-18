/**
 * Return action on create post
 * @param {*} post 
 * @exports createPost
 */
export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        /**
         * Get instance of firestore and add post to collection on db
         */
        const firestore = getFirestore()
        firestore.collection('posts').add({
            ...post,
            authorFirstName: 'Esmerlin',
            authorLastName: 'Mieses',
            authorId: 12345,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({ type: 'CREATE_POST', post }) 
        }).catch(err => {
            dispatch({ type: 'CREATE_POST_ERROR', err })
        })
    }
} 