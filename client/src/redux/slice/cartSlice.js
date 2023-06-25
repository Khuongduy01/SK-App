import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      productId: 1,
      quantity: 1,
      size: 1,
    },
  ],
};

export const cartSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
