import React from "react";
import { Stack, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchField({ onClose = () => {} }) {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        backgroundColor: "rgb(0 0 0 / 3%)",
        border: "1px solid rgb(0 0 0 / 9%)",
        borderRadius: "99px",
        px: "12px",
        height: "32px",
        width: "100%",
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          color: "#777",
          fontSize: ".8rem",
          "& input": {
            textAlign: "center",
          },
        }}
        placeholder="Tìm kiếm sản phẩm"
      />
      <IconButton
        type="button"
        sx={{ p: "0", color: "#212529" }}
        aria-label="search"
        onClick={() => {
          onClose();
        }}
      >
        <Search />
      </IconButton>
    </Stack>
  );
}

export default SearchField;
