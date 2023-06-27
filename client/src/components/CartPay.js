import { Box, Badge, Divider, Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";

function CartPay() {
  return (
    <Box
      sx={{
        pl: {
          sx: 0,
          lg: "40px",
        },
        borderLeft: {
          sx: 0,
          lg: "1px solid #e1e1e1",
        },
      }}
    >
      <Stack
        direction={"row"}
        sx={{ paddingBottom: "20px" }}
        gap={"1rem"}
        justifyContent={"space-between"}
        alignContent={"center"}
      >
        <Badge badgeContent={4} color="primary">
          <Box
            component={"img"}
            src={"/imgs/ProjectImg1.jpg"}
            sx={{ width: "60px", height: "60px", boxShadow: "0 0 0 1px rgba(0,0,0,.1)", borderRadius: "8px" }}
          />
        </Badge>
        <Typography flex={1} sx={{ display: "flex", alignItems: "center" }}>
          Kính Gucci Havana - 36
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>5,490,000₫</Typography>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ paddingBottom: "20px" }}
        gap={"1rem"}
        justifyContent={"space-between"}
        alignContent={"center"}
      >
        <Badge badgeContent={4} color="primary">
          <Box
            component={"img"}
            src={"/imgs/ProjectImg1.jpg"}
            sx={{ width: "60px", height: "60px", boxShadow: "0 0 0 1px rgba(0,0,0,.1)", borderRadius: "8px" }}
          />
        </Badge>
        <Typography flex={1} sx={{ display: "flex", alignItems: "center" }}>
          Kính Gucci Havana - 36
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>5,490,000₫</Typography>
      </Stack>
      <Divider />

      <Stack direction={"row"} sx={{ padding: "20px 0" }} gap={"12px"}>
        <TextField
          value={""}
          placeholder="Mã giảm giá"
          sx={{
            flex: 1,
            "& .MuiInputBase-input": {
              p: "12px",
            },
          }}
        />
        <Button
          sx={{
            height: "47px",
            color: "#fff",
            fontSize: "14px",
            textTransform: "capitalize",
            backgroundColor: "#000",
            "&:hover": { color: "#fff", backgroundColor: "#000" },
          }}
        >
          Sử Dụng
        </Button>
      </Stack>
      <Divider></Divider>

      <Stack
        gap={"10px"}
        sx={{
          padding: "20px 0",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#717171",
            fontSize: "14px",
            "& span:last-child": {
              color: "#4b4b4b",
            },
          }}
        >
          <span>Tạm tính</span> <span>9,894,100₫</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#717171",
            fontSize: "14px",
            "& span:last-child": {
              color: "#4b4b4b",
            },
          }}
        >
          <span>Phí vận chuyển</span> <span>0₫</span>
        </Typography>
      </Stack>

      <Divider></Divider>
      <Typography
        sx={{
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#4b4b4b",
          fontSize: "16px",
          "& span:last-child": {
            fontSize: "24px",
          },
        }}
      >
        <span>Tổng Cộng</span> <span>9,894,100₫</span>
      </Typography>

      <Divider></Divider>
      <Button
        fullWidth
        sx={{
          mt: "20px",
          height: "47px",
          color: "#fff",
          fontSize: "14px",
          textTransform: "capitalize",
          backgroundColor: "#000",
          "&:hover": { color: "#fff", backgroundColor: "#000" },
        }}
      >
        Thanh Toán
      </Button>
    </Box>
  );
}

export default CartPay;
