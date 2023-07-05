import { Outlet } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import TopFooter from "./components/TopFooter";
import ContentFooter from "./components/ContentFooter";
import BottomFooter from "./components/BottomFooter";
import FormSignIn from "./components/FormSignIn";
import { AppBar, Box } from "@mui/material";
import { useEffect } from "react";
import { getAllProducts } from "./util/products";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/slice/productsSlice";
import { postLogin } from "./util/user";
import { loginUser } from "./redux/slice/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts().then((products) => {
      dispatch(setProducts(products.data));
    });
  }, [dispatch]);

  useEffect(() => {
    postLogin().then((res) => {
      console.log(res);
      dispatch(loginUser(res?.data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar position="fixed" sx={{ px: 0, backgroundColor: "#fff" }}>
        <TopHeader></TopHeader>
        <BottomHeader></BottomHeader>
      </AppBar>

      <Box sx={{ mt: { xs: "76px", md: "158px" } }}>
        <Outlet></Outlet>
      </Box>

      <Box component="footer">
        <TopFooter></TopFooter>
        <ContentFooter></ContentFooter>
        <BottomFooter></BottomFooter>
      </Box>

      <FormSignIn></FormSignIn>
    </div>
  );
}

export default App;
