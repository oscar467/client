import { typesProducts } from "../types";

const initialState = {
  products: [],
  getAllProducts: [],
  detail: [],
};
export const productsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typesProducts.getAllProducts:
      return {
        ...state,
        products: actions.payload,
      };
    case typesProducts.createProduct:
      return {
        ...state,
      };
    case typesProducts.getDetails:
      return {
        ...state,
        detail: actions.payload,
      };
    case typesProducts.filterByCategory:
      return {
        ...state,
        products: actions.payload,
      };
    default:
      return state;
  }
};
