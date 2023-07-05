import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ShoppingCartCheckout, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Sale from "./Sale";
import { BASE_URL_SERVER } from "../constant";
import numberWithCommas from "../util/numberWithCommas";

function ListProductItem({ data }) {
  if (data)
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
          <Sale data={data.sale}></Sale>
          <Link to={`/product/${data.productId}`}>
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
              <Box
                component={"img"}
                sx={{ aspectRatio: "1/1", width: "100%" }}
                src={`${BASE_URL_SERVER}${data.thumbnail}`}
                alt="123"
              />
            </Box>
          </Link>
          <Typography
            variant="p"
            color="initial"
            sx={{ fontSize: ".75rem", textTransform: "uppercase", mt: 1, textAlign: "center" }}
          >
            {data.category} {data.brand}
          </Typography>
          <Link to={`/product/${data.productId}`}>
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
              {data.name}
            </Typography>
            <Box
              component={"p"}
              sx={{
                fontSize: ".9rem",
                textAlign: "center",
              }}
            >
              <Typography variant="span" sx={{ textDecoration: "line-through", color: "#777", marginRight: ".3rem" }}>
                {numberWithCommas(data.price)}
              </Typography>
              <Typography variant="span" sx={{ color: "#111", fontWeight: "700" }}>
                {numberWithCommas(data.price - (data.price * data.sale) / 100)}
              </Typography>
            </Box>
          </Link>
        </Stack>
      </>
    );
}

export default ListProductItem;
