import axios from "axios";
import { typesCart } from "../types";
import { cartReducer } from "../reducer/cartReducer";

export const addToCart = (item) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: typesCart.addToCart,
        payload: item,
      });
      const { cartReducer } = getState();
      console.log(cartReducer);
      localStorage.setItem("cart", JSON.stringify(cartReducer));
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeFromCart = (itemId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: typesCart.removeFromCart,
        payload: itemId,
      });
      const { cartReducer } = getState();
      localStorage.setItem("cart", JSON.stringify(cartReducer));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateCartItem = (itemId, quantity) => {
  return {
    type: typesCart.updateCartItem,
    payload: {
      itemId,
      quantity,
    },
  };
};

export const currentCart = (cart) => {
  return {
    type: typesCart.currentCart,
    cart,
  };
};
