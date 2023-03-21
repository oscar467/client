import axios from "axios";
import { typesProducts } from "../types";

export const getAllProducts= () =>{
    return async function (dispatch) {
        const getAllProducts=await axios.get('/products');
        dispatch ({
            type: typesProducts.getAllProducts,
            payload: getAllProducts.data
        })
    }
}

export const createProduct= (payload) => {
    return async function() {
        return await axios.post('/products', payload);
    }
}