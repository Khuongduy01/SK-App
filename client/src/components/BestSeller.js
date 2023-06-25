import React from "react";
import TitleHome from "./TitleHome";
import { Grid, Stack } from "@mui/material";
import ListProductItem from "./ListProductItem";
import ButtonAll from "./ButtonAll";

function BestSeller() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <TitleHome>Best Seller</TitleHome>{" "}
      <Grid container>
        {[...Array(12)].map((_, index) => {
          return (
            <Grid item xs={6} md={4} lg={3} key={index}>
              <ListProductItem></ListProductItem>
            </Grid>
          );
        })}
      </Grid>
      <ButtonAll></ButtonAll>
    </Stack>
  );
}

export default BestSeller;
