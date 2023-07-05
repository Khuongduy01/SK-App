import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ListProductItem from "./ListProductItem";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { useSelector } from "react-redux";

function PrevArrowCustom({ onClick }) {
  return (
    <NavigateBefore
      onClick={onClick}
      sx={{
        zIndex: 1,
        color: "#999",
        fontSize: "40px",
        position: "absolute",
        top: "50%",
        left: "-16px",
        transition: "all .5s ease-in-out",
        opacity: 0,
        "&:hover": {
          opacity: 1,
          color: "#333",
        },
      }}
    />
  );
}

function NextArrowCustom({ onClick }) {
  return (
    <NavigateNext
      onClick={onClick}
      sx={{
        zIndex: 1,
        color: "#999",
        fontSize: "40px",
        position: "absolute",
        top: "50%",
        right: "-16px",
        transition: "all .5s ease-in-out",
        opacity: 0,
        "&:hover": {
          color: "#333",
          opacity: 1,
        },
      }}
    />
  );
}

function MoreProducts() {
  const productsData = useSelector((state) => state.products.data);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrowCustom></NextArrowCustom>,
    prevArrow: <PrevArrowCustom></PrevArrowCustom>,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        "&:hover .MuiSvgIcon-root": {
          opacity: 1,
        },
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        sx={{
          py: "1rem",
          mb: ".5rem",
          fontSize: "1.25rem",
          color: "#555",
          fontWeight: "700",
        }}
      >
        Sản Phẩm Tương Tự
      </Typography>
      <Slider {...settings}>
        {productsData &&
          productsData.map((product, index) => {
            return <ListProductItem key={index} data={product}></ListProductItem>;
          })}
      </Slider>
    </Box>
  );
}

export default MoreProducts;
