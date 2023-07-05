import { Box, Typography, Stack, IconButton, Divider, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import numberWithCommas from "../util/numberWithCommas";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../redux/slice/userSlice";
import React, { Fragment, useMemo } from "react";
import { useSnackbar } from "notistack";
import { BASE_URL_SERVER } from "../constant";

function MenuCartContent({ carts }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const totalCartsPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      return (acc += parseInt(cart.priceDrop) * parseInt(cart.cartQuatity));
    }, 0);
  }, [carts]);

  const handleDeleteCartItem = (index, cart) => {
    dispatch(
      deleteCartItem({
        index,
        cart,
      })
    );

    enqueueSnackbar("Xoá khỏi giỏ hàng thành công", { variant: "success" });
  };

  return (
    <Box sx={{ p: "1.5rem" }}>
      {carts?.length >= 1 ? (
        <>
          .cartQuatity
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#777",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Giỏ Hàng
          </Typography>
          {carts &&
            carts.map((cart, index) => {
              return (
                <Fragment key={index}>
                  <Stack direction={"row"} sx={{ py: "10px", gap: ".5rem" }}>
                    <Box
                      component={"img"}
                      src={`${BASE_URL_SERVER}${cart.thumbnail}`}
                      sx={{ width: "60px", height: "60px" }}
                    />
                    <Box>
                      <Typography sx={{ color: "#446084" }}>
                        {cart.name} {cart.cartSize}
                      </Typography>
                      <Typography variant="body1" color="initial" sx={{ fontSize: ".85rem" }}>
                        {cart.cartQuatity} X <b> {`${numberWithCommas(cart.priceDrop)} Đ`}</b>
                      </Typography>
                    </Box>
                    <IconButton
                      sx={{
                        width: "24px",
                        height: "24px",
                        border: "2px solid #ccc",
                        "& .MuiSvgIcon-root": {
                          fontSize: "14px",
                        },
                      }}
                      onClick={() => {
                        handleDeleteCartItem(index, cart);
                      }}
                    >
                      <Close></Close>
                    </IconButton>
                  </Stack>
                  <Divider />
                </Fragment>
              );
            })}
          <Typography sx={{ color: "#777", textAlign: "center", fontWeight: "700", py: "10px" }}>
            Tổng Số : <b style={{ color: "#111" }}>{totalCartsPrice && `${numberWithCommas(totalCartsPrice)} Đ`}</b>
          </Typography>
          <Divider />
          <Button
            fullWidth
            component={Link}
            to="/cart"
            sx={{
              height: "40px",

              color: "#fff",
              backgroundColor: "#000",
              fontWeight: "700",
              mt: "1rem",
              "&:hover": { color: "#fff", backgroundColor: "#000" },
            }}
          >
            Xem giỏ Hàng
          </Button>
          <Button
            fullWidth
            component={Link}
            to="/pay"
            sx={{
              height: "40px",
              color: "#fff",
              backgroundColor: "#000",
              fontWeight: "700",
              mt: ".5rem",
              "&:hover": { color: "#fff", backgroundColor: "#000" },
            }}
          >
            Thanh toán
          </Button>
        </>
      ) : (
        <Typography sx={{ color: "#777" }}>Chưa có sản phẩm nào trong giỏ hàng</Typography>
      )}
    </Box>
  );
}

function MenuCart({ carts }) {
  if (carts)
    return (
      <>
        <Box
          sx={{
            position: "absolute",
            width: "257px",
            maxHeight: "600px",
            overflow: "scroll",
            backgroundColor: "#fff",
            display: "none",
            opacity: 0,
            zIndex: 4,
            top: "100%",
            right: "-8px",
            boxShadow: "1px 1px 15px rgba(0,0,0,.15)",
            transition: "all 2s ease-in-out",
            "&::after": {
              content: "''",
              border: "8px solid transparent",
              position: "absolute",
              borderBottomColor: "#fff",
              bottom: "100%",
              right: "16px",
            },
          }}
        >
          <MenuCartContent carts={carts}></MenuCartContent>
        </Box>
      </>
    );
}

export default MenuCart;
