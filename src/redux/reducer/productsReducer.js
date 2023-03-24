import { typesProducts } from "../types";

const initialState = {
  products: [],
  copyProducts: [],
  detail: [],
};
export const productsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typesProducts.getAllProducts:
      return {
        ...state,
        products: actions.payload,
        copyProducts: actions.payload
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
    case typesProducts.filterBySizes:
      const productsFilters = state.copyProducts.filter(pruduct => {
        if (actions.size === 'Todos') return state.copyProducts
        return pruduct.size && pruduct.size.includes(actions.size)
      })
      return {
        ...state,
        products: productsFilters
      }
    case typesProducts.orderByName:
      return {
        ...state,
        products: actions.payload
      }
    default:
      return state;
  }
};
