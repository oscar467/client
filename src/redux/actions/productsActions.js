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
      console.log(getDetails.data);
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
    try {
      const getDetails = await axios.get(
        `categories/filter-category/${category}`
      );
      console.log(getDetails.data);
      dispatch({
        type: typesProducts.getDetails,
        payload: getDetails.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
