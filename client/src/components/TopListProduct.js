import React from "react";
import { Stack, ButtonBase, Select, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BreadcrumbsApp from "./BreadcrumbsApp";
import MenuFilter from "./MenuFilter";
import { useState } from "react";

function TopListProduct() {
  const [openMenuFilter, setOpenMenuFilter] = useState(false);

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      alignItems={"center"}
      justifyContent={{ xs: "center", lg: "space-between" }}
    >
      <BreadcrumbsApp></BreadcrumbsApp>

      <ButtonBase
        sx={{
          display: { xs: "flex", lg: "none" },
          width: "fit-content",
          justifyContent: "center",
          my: "13px",
          color: "#777",
        }}
        onClick={() => {
          setOpenMenuFilter(true);
        }}
      >
        <MenuIcon />
        LỌC
      </ButtonBase>
      <MenuFilter open={openMenuFilter} onToggleMenu={setOpenMenuFilter}></MenuFilter>

      <Stack direction={"row"} alignItems={"center"}>
        <Typography variant="p" color="initial" sx={{ display: { xs: "none", lg: "flex" }, mr: "16px", color: "#777" }}>
          Showing 1–4 of 4 results
        </Typography>

        <Select
          value={1}
          sx={{
            height: "38px",
            p: "0px 10px 0px 10px",
            "& > .MuiSelect-select": {
              padding: 0,
            },
          }}
        >
          <MenuItem value={1}>Thứ tự theo giá: cao xuống thấp</MenuItem>
          <MenuItem value={2}>Thứ tự theo giá: thấp đến cao</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
}

export default TopListProduct;
