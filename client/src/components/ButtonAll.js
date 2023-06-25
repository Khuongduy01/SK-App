import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function ButtonAll() {
  return (
    <Button
      component={Link}
      to="/products/all"
      sx={{
        mx: "auto",
        border: "2px solid #202020",
        color: "#202020",
        px: "1.2rem",
        margin: "24px 0 16px 0",
        height: "34px",
        fontWeight: "700",
        transition: "all 0.2s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
        "&:hover": {
          backgroundColor: "#202020",
          color: "#fff",
        },
      }}
    >
      Xem tất cả
    </Button>
  );
}

export default ButtonAll;
