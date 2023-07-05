import { fetchPostLogin, fetchPostRegister, fetchAllGetUsers, fetchDeleteUser, fetchUpdateUser } from "../api";
import { AUTHENTICATION_SNEAKER_APP } from "../constant";

export const getAllUsers = async () => {
  try {
    const { data } = await fetchAllGetUsers();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (dataFrom) => {
  try {
    const { data } = await fetchPostLogin(dataFrom);
    localStorage.setItem(AUTHENTICATION_SNEAKER_APP, JSON.stringify({ token: data.token }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (dataFrom) => {
  try {
    const { data } = await fetchUpdateUser(dataFrom);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postRegister = async (dataFrom) => {
  try {
    const { data } = await fetchPostRegister(dataFrom);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await fetchDeleteUser(userId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
