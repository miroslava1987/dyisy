import { setProducts } from "./actions";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("MOCK_DATA.json");
    dispatch(setProducts(data));
  } catch (error) {
    console.log(error);
  }
};