import { Box, Button, styled, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData, setFormStatus } from "../redux/slice/appSlice";
import { LOG_IN, REGISTER } from "../constant";
import React from "react";

function MenuAccount() {
  const dispatch = useDispatch();
  const Btn = styled(Button)({
    width: "100%",
    justifyContent: "start",
    color: "#777",
  });

  const handleOpenFrom = (data) => {
    dispatch(setFormStatus(true));
    dispatch(setFormData(data));
  };
  return (
    <Box sx={{ p: "1.5rem" }}>
      {false ? (
        <>
          <Btn component={Link} to={"/profile"}>
            Thông Tin Tài Khoản
          </Btn>
          <Divider></Divider>
          <Btn component={Link} to={"/cart"}>
            Giỏ Hàng
          </Btn>
          <Divider></Divider>
          <Btn component={Link}>Đăng Xuất</Btn>
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
