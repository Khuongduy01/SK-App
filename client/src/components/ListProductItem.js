import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ShoppingCartCheckout, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Sale from "./Sale";

function ListProductItem({ d }) {
  return (
    <>
      <Stack
        sx={{
          paddingBottom: "20px",
          paddingX: "10px",
          position: "relative",
          "&:hover": {
            "& .IconGroupHover": {
              display: "block",
            },
          },
        }}
        alignItems={"center"}
      >
        <Sale></Sale>
        <Link to={"/product/1"}>
          <Box sx={{ position: "relative" }}>
            <ShoppingCartCheckout
              className="IconGroupHover"
              sx={{
                position: "absolute",
                left: "15px",
                bottom: "5px",
                color: "#000",
                display: "none",
                "&:hover": {
                  color: "silver",
                },
              }}
            ></ShoppingCartCheckout>
            <Favorite
              className="IconGroupHover"
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "30xp",
                color: "#000",
                display: "none",
                "&:hover": {
                  color: "silver",
                },
              }}
            ></Favorite>
            <Box component={"img"} sx={{ aspectRatio: "1/1", width: "100%" }} src="\imgs\ProjectImg1.jpg" alt="123" />
          </Box>
        </Link>
        <Typography
          variant="p"
          color="initial"
          sx={{ fontSize: ".75rem", textTransform: "uppercase", mt: 1, textAlign: "center" }}
        >
          Mũ
        </Typography>
        <Link to={"/product/1"}>
          <Typography
            sx={{
              fontSize: ".9rem",
              color: "#446084",
              textTransform: "capitalize",
              textAlign: "center",
              height: "36px",
              textDecoration: "none",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            {`Dép MLB Logo New York Yankees ‘Black’`}
          </Typography>
          <Box
            component={"p"}
            sx={{
              fontSize: ".9rem",
              textAlign: "center",
            }}
          >
            <Typography variant="span" sx={{ textDecoration: "line-through", color: "#777", marginRight: ".3rem" }}>
              {d && d} 1.250.000₫
            </Typography>
            <Typography variant="span" sx={{ color: "#111", fontWeight: "700" }}>
              875.000₫
            </Typography>
          </Box>
        </Link>
      </Stack>
    </>
  );
}

export default ListProductItem;
