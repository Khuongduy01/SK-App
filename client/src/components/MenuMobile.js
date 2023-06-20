import React from "react";
import { Drawer, Box } from "@mui/material";

function MenuMobile({ open, onToggleMenu }) {
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => {
        onToggleMenu(false);
      }}
    >
      <Box color="primary" sx={{ width: "260px" }}></Box>
    </Drawer>
  );
}

export default MenuMobile;
