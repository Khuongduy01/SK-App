import { Grid } from "@mui/material";
import ListProductItem from "./ListProductItem";
import React from "react";
import Filter from "./Filter";

function BodyListProduct() {
  return (
    <Grid container sx={{ mt: "30px" }}>
      <Grid item xs={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <Filter></Filter>
      </Grid>
      <Grid item xs={12} lg={9} container>
        {[...Array(13)].map((_, index) => {
          return (
            <Grid item xs={6} sm={4} key={index}>
              <ListProductItem></ListProductItem>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default BodyListProduct;
