import { Box, Button, styled, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { setFormData, setFormStatus } from "../redux/slice/appSlice";
import { LOG_IN, REGISTER } from "../constant";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/slice/userSlice";
import React from "react";
import { useSnackbar } from "notistack";

function MenuAccount() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const Btn = styled(Button)({
    width: "100%",
    justifyContent: "start",
    color: "#777",
  });

  const handleOpenFrom = (data) => {
    dispatch(setFormStatus(true));
    dispatch(setFormData(data));
  };

  const handleLogout = () => {
    dispatch(logoutUser(""));
    enqueueSnackbar("Đăng xuất thành công", { variant: "success" });
  };

  return (
    <Box sx={{ p: "1.5rem" }}>
      {user.status ? (
        <>
          <Btn component={Link} to={"/profile"}>
            Thông Tin Tài Khoản
          </Btn>
          <Divider></Divider>
          <Btn component={Link} to={"/cart"}>
            Giỏ Hàng
          </Btn>
          <Divider></Divider>
          <Btn
            onClick={() => {
              handleLogout();
            }}
          >
            Đăng Xuất
          </Btn>
        </>
      ) : (
        <>
          <Btn
            component={Link}
            onClick={() => {
              handleOpenFrom(LOG_IN);
            }}
          >
            Đăng Nhập
          </Btn>
          <Divider></Divider>
          <Btn
            component={Link}
            onClick={() => {
              handleOpenFrom(REGISTER);
            }}
          >
            Đăng Kí
          </Btn>
        </>
      )}
    </Box>
  );
}

export default MenuAccount;
