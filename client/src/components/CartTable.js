import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
  InputBase,
  styled,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { BASE_URL_SERVER } from "../constant";
import numberWithCommas from "../util/numberWithCommas";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { deleteCartItem } from "../redux/slice/userSlice";

const TableItem = styled(TableCell)({
  border: "1px solid #ddd !important",
  backgroundColor: "#efefef",
  fontWeight: "700",
});

function CartTable({ carts }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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
    <TableContainer>
      <Table sx={{ borderRadius: "0" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableItem align="center">Hình Ảnh</TableItem>
            <TableItem align="center">Sản Phẩm</TableItem>
            <TableItem align="center">Số Lượng</TableItem>
            <TableItem align="center">Giá Tiền</TableItem>
            <TableItem align="center">Xóa</TableItem>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((cart, index) => {
            return (
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} key={index}>
                <TableItem align="center" sx={{ backgroundColor: "#fff" }}>
                  <Box
                    component={"img"}
                    src={`${BASE_URL_SERVER}${cart.thumbnail}`}
                    sx={{ width: "60px", height: "60px" }}
                  />
                </TableItem>
                <TableItem align="center" sx={{ backgroundColor: "#fff", color: "#446084" }}>
                  {cart.name} - {cart.cartSize}
                </TableItem>
                <TableItem align="center" sx={{ backgroundColor: "#fff", width: "75px" }}>
                  <InputBase
                    sx={{
                      border: "1px solid #ddd",
                      "& input": {
                        textAlign: "center",
                      },
                      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        display: "none",
                      },
                    }}
                    type="number"
                    value={cart.cartQuatity}
                  />
                </TableItem>
                <TableItem align="center" sx={{ backgroundColor: "#fff", color: "red" }}>
                  {numberWithCommas(cart.priceDrop)} Đ
                </TableItem>
                <TableItem align="center" sx={{ backgroundColor: "#fff" }}>
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
                </TableItem>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable;
