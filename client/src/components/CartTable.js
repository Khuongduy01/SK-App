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

const TableItem = styled(TableCell)({
  border: "1px solid #ddd !important",
  backgroundColor: "#efefef",
  fontWeight: "700",
});

function CartTable() {
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
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableItem align="center" sx={{ backgroundColor: "#fff" }}>
              <Box component={"img"} src={"/imgs/ProjectImg1.jpg"} sx={{ width: "60px", height: "60px" }} />
            </TableItem>
            <TableItem align="center" sx={{ backgroundColor: "#fff", color: "#446084" }}>
              Giày nam Vans Style 36 ‘Black Skull’ - 36
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
              />
            </TableItem>
            <TableItem align="center" sx={{ backgroundColor: "#fff", color: "red" }}>
              1.290.000₫
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
              >
                <Close></Close>
              </IconButton>
            </TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable;
