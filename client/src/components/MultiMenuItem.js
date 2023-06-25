import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@mui/icons-material";

function MultiMenuItem({ data }) {
  return (
    <Box
      sx={{
        px: "10px",
        py: "5px",
        border: "1px solid #000",
        backgroundColor: "#fff",
        height: "36px",
        zIndex: 3,
        width: "100px",
        position: "relative",
        "&:hover": {
          "& > .MuiStack-root": {
            opacity: 1,
          },
        },
      }}
    >
      <Link to={data.path} style={{ color: "#446084" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          {data.title}
          {data.content && <ArrowRightOutlined sx={{ color: "#446084" }}></ArrowRightOutlined>}
        </Stack>
      </Link>
      {data.content && (
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: "100%",
            opacity: 0,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          {data.content.map((value, index) => {
            return (
              <Box
                sx={{
                  px: "10px",
                  py: "5px",
                  border: "1px solid #000",
                  height: "36px",
                  width: "100px",
                  backgroundColor: "#fff",
                  zIndex: 3,
                }}
                key={index}
              >
                <Link to={value.path} style={{ color: "#446084" }}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    {value.title}
                  </Stack>
                </Link>
              </Box>
            );
          })}
        </Stack>
      )}
    </Box>
  );
}

export default MultiMenuItem;
