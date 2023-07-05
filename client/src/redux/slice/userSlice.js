import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATION_SNEAKER_APP } from "../../constant";

const initialState = {
  status: false,
  data: {
    address: "",
    permission: "user",
    carts: [],
    order: [],
    gmail: "",
    password: "",
    phone: 0,
    prefer: [],
    userName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      if (action.payload) {
        state.status = true;
        state.data = action.payload;
      } else {
        state.status = false;
      }
    },
    logoutUser: (state, action) => {
      localStorage.setItem(AUTHENTICATION_SNEAKER_APP, "");
      state.status = initialState.status;
      state.data = initialState.data;
    },
    pushCartItem: (state, action) => {
      state.data.carts.push(action.payload);
    },
    deleteCartItem: (state, action) => {
      state.data.carts = state.data.carts.filter((item, index) => {
        return index !== action.payload.index && item !== action.payload.cart;
      });
    },
  },
});

export const { pushCartItem, deleteCartItem, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
