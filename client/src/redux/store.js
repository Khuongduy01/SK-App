import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
  },
});
