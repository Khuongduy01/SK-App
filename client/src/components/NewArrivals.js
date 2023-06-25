import React from "react";
import TitleHome from "./TitleHome";
import { Stack, Grid } from "@mui/material";
import ListProductItem from "./ListProductItem";
import ButtonAll from "./ButtonAll";

function NewArrivals() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <TitleHome>New Arrivals</TitleHome>
      <Grid container>
        {[...Array(7)].map((_, index) => {
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

export default NewArrivals;
