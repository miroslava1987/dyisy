import { SET_LOADER, SET_PRODUCTS } from "./types";

export const initialState = {
  products: [],
  isLoaded: false,
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADER:
      return {
        ...state,
        isLoaded: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoaded: false,
      };
    default:
      return state;
  }
}
