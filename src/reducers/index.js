import {combineReducers} from 'redux'
import authUser from './authUser'
import users from './users'
import questionos from './questions'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    authUser,
    users,
    questionos,
    loadingBar:loadingBarReducer,
})