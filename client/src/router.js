import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.js";
import Home from "./layouts/Home.js";
import ListProduct from "./layouts/ListProduct.js";
import Error from "./layouts/Error.js";
import Product from "./layouts/Product.js";
import Cart from "./layouts/Cart.js";
import Pay from "./layouts/Pay.js";
import News from "./layouts/News.js";
import Promotion from "./layouts/Promotion.js";
import Profile from "./layouts/Profile.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/products/:param" element={<ListProduct />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/news" element={<News />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
