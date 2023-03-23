import {typesUsers} from '../types';

const initialState = {
    users: []
}

export const userR = (state = initialState, actions) => {
    switch (actions.type) {
        case typesUsers.createUser:
            return {
                ...state
            }
        case typesUsers.login:
            return  {
                ...state
            }
        default :
            return state
    }
}