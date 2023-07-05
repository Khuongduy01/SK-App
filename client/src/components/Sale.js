import { Box, Stack } from "@mui/material";
import React from "react";

function Sale({ data }) {
  if (data)
    return (
      <Stack
        sx={{
          backgroundColor: "#ff3d00",
          top: 0,
          left: "10px",
          height: "53px",
          width: "40px",
          color: "#fff",
          textAlign: "center",
          position: "absolute",
          zIndex: 1,
          "&::after": {
            position: "absolute",
            content: '""',
            bottom: "-9px",
            right: "0",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderTop: "10px solid #ff3d00",
            borderBottom: "0px solid transparent",
          },
        }}
        justifyContent={"center"}
      >
        <Box component={"span"} sx={{ fontSize: "20px", fontWeight: "700", width: "100%", mt: "4px", lineHeight: "1" }}>
          {data}
          <Box component={"span"} sx={{ fontSize: "12px", ml: "-2px" }}>
            %
          </Box>
        </Box>
        <Box
          component={"span"}
          sx={{ fontSize: "12px", textTransform: "uppercase", width: "100%", lineHeight: "1.3em" }}
        >
          Giá Sốc
        </Box>
      </Stack>
    );
}

export default Sale;
