import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App.js";
import Home from "../layouts/Home.js";
import ListProduct from "../layouts/ListProduct.js";
import Error from "../layouts/Error.js";
import Product from "../layouts/Product.js";
import Cart from "../layouts/Cart.js";
import Pay from "../layouts/Pay.js";
import News from "../layouts/News.js";
import Promotion from "../layouts/Promotion.js";
import Profile from "../layouts/Profile.js";
import Admin from "../layouts/Admin.js";
import ScrollToTop from "../components/ScrollToTop.js";
import AdminUser from "../components/AdminUser.js";
import AdminProduct from "../components/AdminProduct.js";

function RouterApp() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/products/:param" element={<ListProduct />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/news" element={<News />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="user" element={<AdminUser />}></Route>
              <Route path="product" element={<AdminProduct />}></Route>
            </Route>
          </Route>
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default RouterApp;
