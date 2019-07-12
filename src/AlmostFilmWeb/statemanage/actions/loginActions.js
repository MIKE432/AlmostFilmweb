import { USER_LOG_IN, USER_LOG_OUT } from './actionTypes';

export function userLogIn( user ) {
    return { type: USER_LOG_IN, user: user, logged: true }
}

export function userLogOut() {
    return { type: USER_LOG_OUT, user: {}, logged: false }
}