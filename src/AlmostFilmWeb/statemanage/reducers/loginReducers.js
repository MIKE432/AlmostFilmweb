import { combineReducers } from 'redux'
import { USER_LOG_IN, USER_LOG_OUT } from '../actions/actionTypes'

const initalState = { user: {}, logged: false }

function userLogin( state = initalState, action ) {
    switch(action.type) {
        case USER_LOG_IN: {
            return Object.assign({}, state, { user: action.user, logged: action.logged })
        }
        case USER_LOG_OUT: {
            return Object.assign({}, state, { user: action.user, logged: action.logged })
        }
        default: return state;
    }
}

const reducers = combineReducers({userLogin})
export default reducers;