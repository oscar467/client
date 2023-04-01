import axios from "axios";
import { typesProducts } from "../types";

export const getAllProducts = () => {
  return async function (dispatch) {
    const getAllProducts = await axios.get("products");
    dispatch({
      type: typesProducts.getAllProducts,
      payload: getAllProducts.data,
    });
  };
};

export const createProduct = (payload) => {
  return async function () {
    return await axios.post("products", payload);
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    try {
      const getDetails = await axios.get(`products/${id}`);
      // console.log(getDetails.data);
      dispatch({
        type: typesProducts.getDetails,
        payload: getDetails.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const filterByCategory = (category) => {
  return async function (dispatch) {
    const getAllProducts = await axios.get("products");
    if (category == "Todas") {
      dispatch({
        type: typesProducts.getAllProducts,
        payload: getAllProducts.data,
      });
    } else {
      try {
        const getDetails = await axios.get(
          `categories/filter-category/${category}`
        );
        dispatch({
          type: typesProducts.filterByCategory,
          payload: getDetails.data[0].Products,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
};
export const orderByName = (value) => {
  return async function (dispatch) {
    try {
      if (value === "A-Z" || value === "Z-A") {
        const productsOrderByName = await axios.get(
          `products/order-products/${value}`
        );
        dispatch({
          type: typesProducts.orderByName,
          payload: productsOrderByName.data,
        });
      }
      if (value === "ASC" || value === "DES") {
        const productsOrderByPrice = await axios.get(
          `products/order-by-price/${value}`
        );
        dispatch({
          type: typesProducts.orderByName,
          payload: productsOrderByPrice.data,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
};
export const filterBySize = (size) => {
  return {
    type: typesProducts.filterBySizes,
    size,
  };
};
