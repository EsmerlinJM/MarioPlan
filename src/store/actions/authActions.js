export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password    
        )
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNOUT_ERROR', err })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password 
        )
        .then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type:'SIGNUP_ERROR', err })
        });
    }
}

export const signInGoogle = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: res.user.displayName,
                lastName: res.user.displayName,
                initials: res.user.displayName[0] + res.user.displayName[0]
            })
        }).then(() => {
            dispatch({ type:'SIGNIN_GOOGLE_SUCCESS' })
        }).catch( err => {
            dispatch({ type:'SIGNIN_GOOGLE_ERR', err })
        })
    }
}