import authReducer from './authReducer'
import postReducer from './postReducer'
import { combineReducers } from 'redux'

/**
 * Return object reducer with combiner reducers.
 * 
 * @param {Object} reducer
 */
const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
})

export default rootReducer