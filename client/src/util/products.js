import { fetchGetAllProducts, fetchNewProduct, fetchUpdateProduct, fetchDeleteProduct, fetchGetProduct } from "../api";

export const getAllProducts = async () => {
  try {
    const { data } = await fetchGetAllProducts();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (productId) => {
  try {
    const { data } = await fetchGetProduct(productId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const newProduct = async (formData) => {
  try {
    const { data } = await fetchNewProduct(formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (productId, formData) => {
  try {
    const { data } = await fetchUpdateProduct(productId, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const { data } = await fetchDeleteProduct(productId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
