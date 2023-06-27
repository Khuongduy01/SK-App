import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  TextareaAutosize,
  styled,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router-dom";

function FormPay() {
  const StyledTextarea = styled(TextareaAutosize)({
    width: "100%",
    minHeight: "72px",
  });
  return (
    <Box
      sx={{
        pr: {
          sx: 0,
          lg: "54px",
        },
      }}
    >
      <Typography color={"#333"} fontSize={"1.25rem"}>
        Thông Tin giao hàng
      </Typography>
      <Typography color={"#737373"} fontSize={"14px"} mb={"12px"}>
        Bạn đã có tài khoản ?{" "}
        <Button
          type="text"
          component="a"
          disableRipple
          sx={{
            "&:hover": { backgroundColor: "#fff", textDecoration: "underline" },
            color: "#338dbc",
            textTransform: "capitalize",
            p: "0",
          }}
        >
          Đăng Nhập
        </Button>
      </Typography>
      <Box component={"form"}>
        <TextField
          value={""}
          fullWidth
          placeholder="Họ và tên"
          sx={{
            padding: "6px",
            marginBottom: "12px",
            "& .MuiInputBase-input": {
              p: "12px",
            },
          }}
        />
        <TextField
          value={""}
          fullWidth
          placeholder="Số điện thoại"
          sx={{
            padding: "6px",
            marginBottom: "12px",
            "& .MuiInputBase-input": {
              p: "12px",
            },
          }}
        />
        <TextField
          value={""}
          fullWidth
          placeholder="Địa chỉ"
          sx={{
            padding: "6px",
            marginBottom: "12px",
            "& .MuiInputBase-input": {
              p: "12px",
            },
          }}
        />
        <Grid container>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth sx={{ padding: "6px" }}>
              <Select
                value={0}
                sx={{
                  "& .MuiSelect-select": {
                    p: "12px",
                  },
                }}
              >
                <MenuItem value={0}>Chọn Tỉnh / Thành</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth sx={{ padding: "6px" }}>
              <Select
                value={0}
                sx={{
                  "& .MuiSelect-select": {
                    p: "12px",
                  },
                }}
              >
                <MenuItem value={0}>Chọn Quận / Huyện</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth sx={{ padding: "6px" }}>
              <Select
                value={0}
                sx={{
                  "& .MuiSelect-select": {
                    p: "12px",
                  },
                }}
              >
                <MenuItem value={0}>Chọn Phường / Xã</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "6px",
            mb: "20px",
          }}
        >
          <StyledTextarea placeholder="Ghi Chú ..."></StyledTextarea>
        </Box>

        <FormControlLabel
          control={<Radio size="small" />}
          label="Thanh toán tại nhà"
          sx={{
            p: "6px",
            color: "#737373",
            "& .MuiTypography-root": {
              fontSize: "14px",
              fontWeight: "700",
            },
          }}
        />
      </Box>
      <Link to="/cart">
        <Typography
          sx={{
            color: "#333",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            my: "16px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <NavigateBefore></NavigateBefore>Giỏ Hàng
        </Typography>
      </Link>
    </Box>
  );
}

export default FormPay;
