import axios from 'axios';
import {typesCategories} from '../types';
export const getAlCategories = () => {
    return async function(dispatch) {
        const getAllCategories = await axios.get('/categories')
        return dispatch({
            type: typesCategories.getAlCategories,
            payload: getAllCategories.data
        })
    }
}