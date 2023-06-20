import React from "react";
import { Toolbar } from "@mui/material";

function BottomHeader() {
  return (
    <Toolbar sx={{ px: 2, display: { md: "none" } }} disableGutters></Toolbar>
  );
}

export default BottomHeader;
