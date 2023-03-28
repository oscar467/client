import {typesUsers} from '../types';

const initialState = {
    user: null
}

export const userR = (state = initialState, actions) => {
    switch (actions.type) {
        case typesUsers.createUser:
            return {
                ...state
            }
        case typesUsers.login:
            return  {
                ...state,
                user: actions.payload
            }
        case typesUsers.logout:
            return {
                ...state,
                user: actions.payload
            }
        case typesUsers.currentUser:
            return {
                ...state,
                user: actions.user
            }
        default :
            return state
    }
}