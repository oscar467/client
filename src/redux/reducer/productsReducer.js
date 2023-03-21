import { typesProducts } from "../types"

const initialState = {
    products: []
}
export const productsReducer = (state=initialState, actions) => {
    switch (actions.type) {
        case typesProducts.getAllProducts:
        return{
            ...state,
            products: actions.payload
        }
        case typesProducts.createProduct:
            return {
                ...state
            }
            default:
                return state 
            }
}