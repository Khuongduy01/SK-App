import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import userSlice from "./slice/userSlice";
import productsSlice from "./slice/productsSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    products: productsSlice,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
