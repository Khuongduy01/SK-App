import React from "react";
import { Menu, Box } from "@mui/material";
import SearchField from "./SearchField";

function SearchMobile({ onCloseSearchMenu, openSearchMenu, searchMenuEl }) {
  return (
    <Menu
      anchorEl={searchMenuEl}
      open={openSearchMenu}
      onClose={onCloseSearchMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ p: "20px", width: "257px" }}>
        <SearchField onClose={onCloseSearchMenu}></SearchField>
      </Box>
    </Menu>
  );
}

export default SearchMobile;
