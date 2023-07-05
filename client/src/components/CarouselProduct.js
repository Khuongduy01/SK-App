import { Box } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import Sale from "./Sale";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { BASE_URL_SERVER } from "../constant";

function PrevArrowCustom({ onClick }) {
  return (
    <NavigateBefore
      onClick={onClick}
      sx={{
        zIndex: 1,
        color: "#999",
        fontSize: "40px",
        position: "absolute",
        top: "calc(50% - 115px)",
        left: "6px",
        transition: "all .5s ease-in-out",
        "&:hover": {
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
        top: "calc(50% - 115px)",
        right: "6px",
        transition: "all .5s ease-in-out",
        "&:hover": {
          color: "#333",
        },
      }}
    />
  );
}

function CarouselProduct({ data }) {
  const [activeItem, setActiveItem] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `CarouselProductDots`,
    nextArrow: <NextArrowCustom></NextArrowCustom>,
    prevArrow: <PrevArrowCustom></PrevArrowCustom>,
    beforeChange: (prev, next) => {
      setActiveItem(next);
    },
    appendDots: (dots) => (
      <Box
        sx={{
          width: "100%",
          height: "115px",
        }}
      >
        <Box
          component={"ul"}
          sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", gap: "20px", padding: "0" }}
        >
          {dots}
        </Box>
      </Box>
    ),
    customPaging: function (index) {
      return (
        <Box
          sx={
            index === activeItem
              ? { height: "100%", overflow: "hidden", aspectRatio: "1/1", border: "1px solid rgb(0 0 0 / 20%)" }
              : { height: "100%", overflow: "hidden", aspectRatio: "1/1", border: "1px solid transparent" }
          }
        >
          <Box
            component={"img"}
            src={`${BASE_URL_SERVER}${data.image[index]}`}
            alt="123"
            sx={
              index === activeItem
                ? {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    scale: "1.2",
                    transition: "all 1s ease-in-out",
                  }
                : { display: "block", width: "100%", objectFit: "cover" }
            }
          />
        </Box>
      );
    },
  };
  return (
    <Box
      sx={{
        m: "20px 15px 40px 15px",
        "&:hover .MuiSvgIcon-root": {
          color: "#333",
        },
      }}
    >
      <Slider {...settings}>
        {data.image &&
          data.image.map((image, index) => {
            return (
              <Box sx={{ position: "relative" }} key={index}>
                <Sale data={data.sale}></Sale>
                <Box
                  component={"img"}
                  src={`${BASE_URL_SERVER}${image}`}
                  sx={{
                    width: "100%",
                    aspectRatio: "1/1",
                  }}
                  alt="123"
                />
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
}

export default CarouselProduct;
