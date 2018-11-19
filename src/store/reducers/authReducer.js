const initState = {
    authError: null
}

/**
 * Return reducer with auth properties.
 * 
 * @param {*} state 
 * @param {*} action 
 */
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return state    
                
        default:
            return state
    } 
}

export default authReducer