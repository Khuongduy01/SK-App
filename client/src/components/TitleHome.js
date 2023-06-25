import { Typography, Box } from "@mui/material";
import React from "react";

function TitleHome({ children }) {
  return (
    <Typography
      component={"h2"}
      sx={{
        fontSize: "1.6rem",
        textAlign: "center",
        color: "#555",
        fontWeight: "700",
        textTransform: "uppercase",
        position: "relative",
        zIndex: 2,
        margin: "24px 0 32px 0",
        "&::before": {
          content: "''",
          position: "absolute",
          display: "block",
          width: "100%",
          height: "2px",
          backgroundColor: "#eee",
          left: "0",
          top: "50%",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          padding: "0 15px",
          zIndex: 2,
          position: "relative",
          backgroundColor: "#fff",
          width: "fit-content",
        }}
      >
        {children}
      </Box>
    </Typography>
  );
}

export default TitleHome;
