import React, { useMemo } from "react";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Reply, ArrowBack } from "@mui/icons-material";
import CardTable from "../components/CartTable";
import { useSelector } from "react-redux";
import numberWithCommas from "../util/numberWithCommas";

function Cart() {
  const carts = useSelector((state) => state.user.data.carts);

  const totalCartsPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      return (acc += parseInt(cart.priceDrop) * parseInt(cart.cartQuatity));
    }, 0);
  }, [carts]);
  return (
    <Container maxWidth="ct">
      <Box p="16px 16px 24px 16px">
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "#202020",
            textAlign: "center",
            textTransform: "uppercase",
            mb: "8px",
          }}
        >
          Giỏ Hàng
        </Typography>

        {carts.length >= 1 ? (
          <>
            <CardTable carts={carts}></CardTable>
            <Typography sx={{ color: "#777", my: "1.5rem", textAlign: "end" }}>
              Tổng tiền : <b style={{ color: "#202020" }}>{numberWithCommas(totalCartsPrice)}đ</b>
            </Typography>
            <Stack direction={"row"} gap={"1.25rem"} justifyContent={"end"}>
              <Button
                component={Link}
                to="/"
                sx={{
                  height: "40px",
                  color: "#000",
                  backgroundColor: "#fff",
                  border: "2px solid #000",
                  borderRadius: "0",
                  fontWeight: "700",
                  mt: ".5rem",
                  "&:hover": { color: "#fff", backgroundColor: "#000" },
                }}
              >
                <ArrowBack fontSize="12px"></ArrowBack> Tiếp tục mua sắm
              </Button>
              <Button
                component={Link}
                to="/pay"
                sx={{
                  height: "40px",
                  color: "#fff",
                  backgroundColor: "#000",
                  borderRadius: "0",
                  fontWeight: "700",
                  mt: ".5rem",
                  "&:hover": { color: "#fff", backgroundColor: "#000" },
                }}
              >
                Thanh toán
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#777",
                textAlign: "center",
                mb: "16px",
              }}
            >
              Không có sản phẩm trong giỏ hàng!
            </Typography>
            <Link
              to="/"
              style={{
                width: "fit-content",
                margin: "0 auto",
                padding: "8px",
                display: "flex",
                color: "#446084",
                marginBottom: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Reply></Reply> Tiếp tục mua hàng
            </Link>
          </>
        )}
      </Box>
    </Container>
  );
}

export default Cart;
