import React from "react";
import TitleHome from "./TitleHome";
import { Grid, Stack } from "@mui/material";
import ListProductItem from "./ListProductItem";
import ButtonAll from "./ButtonAll";
import { useSelector } from "react-redux";

function BestSeller() {
  const productsData = useSelector((state) => state.products.data);
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <TitleHome>Best Seller</TitleHome>
      <Grid container>
        {productsData &&
          productsData
            .filter((product, index) => index > 10 && index < 20)
            .map((product, index) => {
              return (
                <Grid item xs={6} md={4} lg={3} key={index}>
                  <ListProductItem data={product}></ListProductItem>
                </Grid>
              );
            })}
      </Grid>
      <ButtonAll></ButtonAll>
    </Stack>
  );
}

export default BestSeller;
