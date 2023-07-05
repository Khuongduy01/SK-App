import React, { useEffect, useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import BreadcrumbsApp from "../components/BreadcrumbsApp";
import DescriptionProducts from "../components/DescriptionProducts";
import MoreProducts from "../components/MoreProducts";
import CarouselProduct from "../components/CarouselProduct";
import ProductContent from "../components/ProductContent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const productsList = useSelector((state) => state.products.data);

  useEffect(() => {
    setProductData(productsList.filter((product) => product.productId === id)[0]);
  }, [id, productsList]);

  return (
    <Container maxWidth="ct">
      <Box pt="20px">
        <BreadcrumbsApp></BreadcrumbsApp>
        {productData?.productId && (
          <>
            <Grid container sx={{ mb: "40px" }}>
              <Grid item xs={12} lg={6}>
                <CarouselProduct data={productData}></CarouselProduct>
              </Grid>
              <Grid item xs={12} lg={6}>
                <ProductContent data={productData}></ProductContent>
              </Grid>
            </Grid>
            <DescriptionProducts data={productData}></DescriptionProducts>
          </>
        )}

        <MoreProducts></MoreProducts>
      </Box>
    </Container>
  );
}

export default Product;
