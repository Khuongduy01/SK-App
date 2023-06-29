import { fetchGetAllProducts } from "../api";

export const getAllProducts = async () => {
  try {
    const { data } = await fetchGetAllProducts();
    return data;
  } catch (error) {
    console.log(error);
  }
};
