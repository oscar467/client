import {typesCategories} from '../types';
const initialState = {
    categories: []
}
export const categoriesR = (state=initialState, actions) => {
    switch (actions.type) {
        case typesCategories.getAlCategories:
            return {
                ...state,
                categories: actions.payload
            }
        default:
            return state
    }
}