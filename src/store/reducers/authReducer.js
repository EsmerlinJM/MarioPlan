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
            console.log('sign out success')
            return state 
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }  
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }     
        case 'SIGNIN_GOOGLE_SUCCESS':
            return {
                ...state,
                authError: null
            } 
        case 'SIGNIN_GOOGLE_ERROR':
            return {
                ...state,
                authError: action.err.message
            }       
        default:
            return state
    } 
}

export default authReducer