import { useState } from "react";
import MenuMobile from "./MenuMobile";

import {
  Toolbar,
  Box,
  Typography,
  IconButton,
  Badge,
  Stack,
  Divider,
} from "@mui/material";
import {
  PersonOutlined,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";

function TopHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Toolbar
      sx={{ px: 2, justifyContent: "space-between", height: "76px" }}
      disableGutters
    >
      <Stack
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
        }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        direction="row"
      >
        <Typography variant="body1" color="initial">
          102 Thái Thịnh, Đống Đa, Hà Nội
        </Typography>
        <Box></Box>
      </Stack>
      <Box
        sx={{
          flex: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <Stack sx={{ flex: 1 }} direction="row">
          <IconButton
            sx={{
              width: "32px",
              height: "32px",
              color: "#7d7f85",
            }}
            onClick={() => {
              setToggleMenu(true);
            }}
          >
            <MenuOutlined></MenuOutlined>
          </IconButton>
          <MenuMobile
            open={toggleMenu}
            onToggleMenu={setToggleMenu}
          ></MenuMobile>
          <IconButton
            sx={{
              width: "32px",
              height: "32px",
              color: "#7d7f85",
            }}
          >
            <SearchOutlined></SearchOutlined>
          </IconButton>
        </Stack>
      </Box>
      <Box
        component="img"
        sx={{
          maxHeight: "76px",
          py: "10px",
        }}
        alt="logo"
        src="imgs\logo.jpg"
      />
      <Stack
        sx={{ flex: 1 }}
        divider={
          <Divider
            sx={{ display: { xs: "none", md: "block" } }}
            orientation="vertical"
            flexItem
          />
        }
        spacing={2}
        direction="row"
        justifyContent="end"
      >
        <IconButton
          sx={{
            width: "32px",
            height: "32px",
            border: "1px solid silver",
            color: "#7d7f85",
          }}
        >
          <PersonOutlined></PersonOutlined>
        </IconButton>
        <IconButton
          sx={{
            width: "32px",
            height: "32px",

            border: "1px solid silver",
            color: "#7d7f85",
          }}
        >
          <Badge badgeContent={4} color="primary">
            <ShoppingBagOutlined></ShoppingBagOutlined>
          </Badge>
        </IconButton>
      </Stack>
    </Toolbar>
  );
}

export default TopHeader;
