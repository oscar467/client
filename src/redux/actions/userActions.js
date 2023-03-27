import axios from "axios";
import {typesUsers} from '../types'
export const createUser = (payload) => {
    return async function() {
        return (await axios.post('user/create_user', payload)).data
    }
}
export const login = (payload) => {
    return async function(dispatch) {
        const res = (await axios.post('auth/login', payload));
        if (res.data){
            saveAuthUser(res.data);
            dispatch({
                type: typesUsers.login,
                payload: res.data
            })
        }else {
            throw new Error('Usuario no resgistrado')
        }
    }
}

export const logout = () => {
    window.localStorage.removeItem('auth')
    return {
        type: typesUsers.logout,
        payload: null
    }
}
const saveAuthUser = (userAuth) => {
    localStorage.setItem('auth', JSON.stringify(userAuth))
}

export const currentUser = (user) => {
    return {
        type: typesUsers.currentUser,
        user
    }
}
