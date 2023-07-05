import React from "react";
import TitleHome from "./TitleHome";
import { Stack, Grid } from "@mui/material";
import ListProductItem from "./ListProductItem";
import ButtonAll from "./ButtonAll";
import { useSelector } from "react-redux";

function NewArrivals() {
  const productsData = useSelector((state) => state.products.data);
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <TitleHome>New Arrivals</TitleHome>
      <Grid container>
        {productsData &&
          productsData
            .filter((product, index) => index < 10)
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

export default NewArrivals;
