import { Box, Typography, Stack, IconButton, Divider, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";

function MenuCartContent() {
  return (
    <Box sx={{ p: "1.5rem" }}>
      {true ? (
        <>
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
          <Stack direction={"row"} sx={{ py: "10px", gap: ".5rem" }}>
            <Box component={"img"} src={"/imgs/ProjectImg1.jpg"} sx={{ width: "60px", height: "60px" }} />
            <Box>
              <Typography sx={{ color: "#446084" }}>
                Áo Sweater Fear Of God Essentials Pullover Mockneck Dark Heather Oatmeal - S
              </Typography>
              <Typography variant="body1" color="initial" sx={{ fontSize: ".85rem" }}>
                1 X <b>1.900.000đ</b>
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
            >
              <Close></Close>
            </IconButton>
          </Stack>
          <Divider />
          <Stack direction={"row"} sx={{ py: "10px", gap: ".5rem" }}>
            <Box component={"img"} src={"/imgs/ProjectImg1.jpg"} sx={{ width: "60px", height: "60px" }} />
            <Box>
              <Typography sx={{ color: "#446084" }}>
                Áo Sweater Fear Of God Essentials Pullover Mockneck Dark Heather Oatmeal - S
              </Typography>
              <Typography variant="body1" color="initial" sx={{ fontSize: ".85rem" }}>
                1 X <b>1.900.000đ</b>
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
            >
              <Close></Close>
            </IconButton>
          </Stack>
          <Divider />
          <Stack direction={"row"} sx={{ py: "10px", gap: ".5rem" }}>
            <Box component={"img"} src={"/imgs/ProjectImg1.jpg"} sx={{ width: "60px", height: "60px" }} />
            <Box>
              <Typography sx={{ color: "#446084" }}>
                Áo Sweater Fear Of God Essentials Pullover Mockneck Dark Heather Oatmeal - S
              </Typography>
              <Typography variant="body1" color="initial" sx={{ fontSize: ".85rem" }}>
                1 X <b>1.900.000đ</b>
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
            >
              <Close></Close>
            </IconButton>
          </Stack>
          <Divider />
          <Typography sx={{ color: "#777", textAlign: "center", fontWeight: "700", py: "10px" }}>
            Tổng Số : <b style={{ color: "#111" }}>1.900.000đ</b>
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

function MenuCart() {
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
        <MenuCartContent></MenuCartContent>
      </Box>
    </>
  );
}

export default MenuCart;
