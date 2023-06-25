import React from "react";
import { Drawer, List } from "@mui/material";
import Filter from "./Filter";

function MenuFilter({ open, onToggleMenu }) {
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => {
        onToggleMenu(false);
      }}
    >
      <List sx={{ width: "260px", py: "30px", px: "15px" }}>
        <Filter></Filter>
      </List>
    </Drawer>
  );
}

export default MenuFilter;
