import {getProducts} from './products/operations';

export const getAllData = () => dispatch => {
  return Promise.all([dispatch(getProducts())])
};