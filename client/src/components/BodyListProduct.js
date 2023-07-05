import { Grid } from "@mui/material";
import ListProductItem from "./ListProductItem";
import React from "react";
import Filter from "./Filter";
import { useSelector } from "react-redux";

function BodyListProduct() {
  const productsData = useSelector((state) => state.products.data);
  return (
    <Grid container sx={{ mt: "30px" }}>
      <Grid item xs={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <Filter></Filter>
      </Grid>
      <Grid item xs={12} lg={9} container>
        {productsData &&
          productsData.map((product, index) => {
            return (
              <Grid item xs={6} sm={4} key={index}>
                <ListProductItem data={product}></ListProductItem>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}

export default BodyListProduct;
