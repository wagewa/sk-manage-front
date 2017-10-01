import {combineReducers} from 'redux'
import LoginReducer from "./login"; // 利用combineReducers 合并reducers

export default combineReducers({
    loginReducer: LoginReducer
})