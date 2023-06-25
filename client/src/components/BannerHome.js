import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Paper, IconButton, Stack } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";

function SampleNextArrow({ onClick }) {
  return (
    <IconButton
      size="36px"
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "10px",
        top: "50%",
        width: "36px",
        height: "36px",
        zIndex: 1,
        color: "#fff",
        border: "2px solid #fff",
        backgroundColor: "transparent",

        "&:hover": {
          borderColor: "#000",
          backgroundColor: "#000",
        },
      }}
    >
      <NavigateNext sx={{ fontSize: "36px" }} />
    </IconButton>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <IconButton
      size="36px"
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "10px",
        top: "50%",
        width: "36px",
        height: "36px",
        zIndex: 1,
        color: "#fff",
        backgroundColor: "transparent",
        border: "2px solid #fff",

        "&:hover": {
          borderColor: "#000",
          backgroundColor: "#000",
        },
      }}
    >
      <NavigateBefore sx={{ fontSize: "36px" }} />
    </IconButton>
  );
}

function BannerHome() {
  const [activeDot, setActiveDot] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    cssEase: "linear",
    beforeChange: (prev, next) => {
      setActiveDot(next);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{
          position: "absolute",
          bottom: "25px",
          left: 0,
        }}
      >
        {dots}
      </Stack>
    ),
    customPaging: (index) => (
      <div
        style={
          index === activeDot
            ? {
                width: "12px",
                height: "12px",
                backgroundColor: "#fff",
                border: "3px solid #fff",
                borderRadius: "100%",
              }
            : {
                width: "12px",
                height: "12px",
                backgroundColor: "transparent",
                border: "3px solid #fff",
                borderRadius: "100%",
              }
        }
      ></div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {[...Array(4)].map((item, index) => (
          <Paper
            key={index}
            sx={{ width: "100%", height: "100%", display: "flex", justifyItems: "center", alignItems: "center" }}
          >
            <Box
              sx={{ display: "block", objectFit: "cover", maxHeight: "700px", width: "100%" }}
              component="img"
              src="\imgs\banner.jpg"
              alt="banner"
            ></Box>
          </Paper>
        ))}
      </Slider>
    </div>
  );
}

export default BannerHome;
