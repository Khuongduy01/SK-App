import React from "react";
import { Container, Box, Grid } from "@mui/material";
import BreadcrumbsApp from "../components/BreadcrumbsApp";
import DescriptionProducts from "../components/DescriptionProducts";
import MoreProducts from "../components/MoreProducts";
import CarouselProduct from "../components/CarouselProduct";
import ProductContent from "../components/ProductContent";

function Product() {
  return (
    <Container maxWidth="ct">
      <Box pt="20px">
        <BreadcrumbsApp></BreadcrumbsApp>
        <Grid container sx={{ mb: "40px" }}>
          <Grid item xs={12} lg={6}>
            <CarouselProduct></CarouselProduct>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ProductContent></ProductContent>
          </Grid>
        </Grid>
        <DescriptionProducts></DescriptionProducts>
        <MoreProducts></MoreProducts>
      </Box>
    </Container>
  );
}

export default Product;
