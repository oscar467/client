import axios from "axios";
export const createUser = (payload) => {
    return async function() {
        return (await axios.post('user/create_user', payload)).data
    }
}
export const login = (payload) => {
    return async function() {
        return (await axios.post('auth/login', payload)).data
    }
}
