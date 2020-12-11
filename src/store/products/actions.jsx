import { SET_PRODUCTS, SET_LOADER } from "./types";

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
});

export const setLoader = () => ({
  type: SET_LOADER
})
