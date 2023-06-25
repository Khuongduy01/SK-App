import { Box, Container } from "@mui/material";
import React from "react";
import TopListProduct from "../components/TopListProduct";
import BodyListProduct from "../components/BodyListProduct";

function ListProduct() {
  return (
    <Container maxWidth="ct">
      <Box pt="20px">
        <TopListProduct />
        <BodyListProduct></BodyListProduct>
      </Box>
    </Container>
  );
}

export default ListProduct;
