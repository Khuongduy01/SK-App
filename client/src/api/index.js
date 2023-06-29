import axios from "axios";
import { AUTHENTICATION_SNEAKER_APP } from "../constant";

export const API = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem(AUTHENTICATION_SNEAKER_APP)) {
    const token = JSON.parse(localStorage.getItem(AUTHENTICATION_SNEAKER_APP)).token;
    req.headers.token = `Bearer ${token}`;
  }
  return req;
});

// user fetch

export const fetchAllGetUsers = () => API.get(`user`);

export const fetchPostLogin = (fromData) => API.post(`user/login`, fromData);

export const fetchPostRegister = (fromData) => API.post(`user/register`, fromData);

export const fetchUpdateUser = (fromData) => API.put(`user`, fromData);

export const fetchDeleteUser = (userId) => API.delete(`user/${userId}`);

// products fetch

export const fetchGetAllProducts = () => API.get("products");

export const fetchGetProduct = (productId) => API.get(`products/${productId}`);

export const fetchNewProduct = (formData) => API.post(`products`, formData);

export const fetchUpdateProduct = (productId, formData) => API.put(`products/${productId}`);

export const fetchDeleteProduct = (productId) => API.delete(`products/${productId}`);
