import { createSlice } from "@reduxjs/toolkit";
import { LOG_IN } from "../../constant";

const initialState = {
  nav: [
    {
      title: "Phụ Kiện",
      path: "/products/phukien",
      content: [
        {
          title: "Mũ",
          path: "/products/Mu",
        },
        {
          title: "Dép",
          path: "/products/Dep",
          content: [
            {
              title: "Dép Nike",
              path: "/products/DepNike",
            },
            {
              title: "Dép Adidas",
              path: "/products/DepAdidas",
            },
          ],
        },
        {
          title: "Tất",
          path: "/products/Tat",
        },
        {
          title: "Kính",
          path: "/products/Kinh",
        },

        {
          title: "Balo",
          path: "/products/balo",
          content: [
            {
              title: "Herschel",
              path: "/products/Herschel",
            },
          ],
        },
      ],
    },
    {
      title: "Giày",
      path: "/products/giay",
      content: [
        {
          title: "Giày Puma",
          path: "/products/GiayPuma",
        },
        {
          title: "Giày Nike",
          path: "/products/GiayNike",
        },
        {
          title: "Giày Adidas",
          path: "/products/GiayAdidas",
        },
      ],
    },
    {
      title: "kí gửi",
      path: "/products/kigui",
    },
    {
      title: "quần áo",
      path: "/products/quanao",
    },
    {
      title: "tin tức",
      path: "/news",
    },
    {
      title: "khuyến mãi",
      path: "/promotion",
    },
  ],
  form: {
    status: false,
    data: LOG_IN,
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFormStatus: (state, action) => {
      state.form.status = action.payload;
    },
    setFormData: (state, action) => {
      state.form.data = action.payload;
    },
  },
});

export const { setFormStatus, setFormData } = appSlice.actions;

export default appSlice.reducer;
