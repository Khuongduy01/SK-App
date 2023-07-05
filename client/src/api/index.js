import axios from "axios";
import { AUTHENTICATION_SNEAKER_APP, BASE_URL_SERVER } from "../constant";

export const API = axios.create({
  baseURL: `${BASE_URL_SERVER}api/`,
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

export const fetchNewProduct = (formData) => {
  const fd = new FormData();

  for (const key in formData) {
    const data = formData[key];

    switch (key) {
      case "image":
        for (let i = 0; i < data.length; i++) {
          fd.append("image", data[i]);
        }
        break;

      case "size":
        for (let i = 0; i < data.length; i++) {
          fd.append("size", data[i]);
        }
        break;

      default:
        fd.append(key, data);
        break;
    }
  }

  return API.post("products", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const fetchUpdateProduct = (productId, formData) => {
  return API.put(`products/${productId}`, formData);
};

export const fetchDeleteProduct = (productId) => API.delete(`products/${productId}`);
