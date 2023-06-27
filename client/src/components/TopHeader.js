import { useState } from "react";
import MenuMobile from "./MenuMobile";
import SearchMobile from "./SearchMobile";
import { Link } from "react-router-dom";
import { Toolbar, Box, Typography, IconButton, Badge, Stack, Divider } from "@mui/material";
import { PersonOutlined, ShoppingBagOutlined, MenuOutlined, SearchOutlined, RoomSharp } from "@mui/icons-material";
import MenuCart from "./MenuCart";
import MenuAccount from "./MenuAccount";

function TopHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchMenuEl, setSearchMenuEl] = useState(null);
  const openSearchMenu = Boolean(searchMenuEl);
  const handleOpenSearchMenu = (e) => {
    setSearchMenuEl(e.currentTarget);
  };
  const handleCloseSearchMenu = () => {
    setSearchMenuEl(null);
  };

  return (
    <Toolbar sx={{ mx: 2, justifyContent: "space-between", height: "76px" }} disableGutters>
      <Stack
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
        }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        direction="row"
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
            fontSize: ".8rem",
            fontWeight: "700",
            transition: `$effect1 .9s infinite`,
          }}
          noWrap
        >
          <RoomSharp></RoomSharp>102 Thái Thịnh, Đống Đa, Hà Nội
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
          <MenuMobile open={toggleMenu} onToggleMenu={setToggleMenu}></MenuMobile>
          <IconButton
            sx={{
              width: "32px",
              height: "32px",
              color: "#7d7f85",
            }}
            onClick={(e) => {
              handleOpenSearchMenu(e);
            }}
          >
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <SearchMobile
            onCloseSearchMenu={handleCloseSearchMenu}
            openSearchMenu={openSearchMenu}
            searchMenuEl={searchMenuEl}
          ></SearchMobile>
        </Stack>
      </Box>
      <Link to="/">
        <Box
          component="img"
          sx={{
            maxHeight: "76px",
            py: "10px",
          }}
          alt="logo"
          src="\imgs\logo.jpg"
        />
      </Link>
      <Stack sx={{ flex: 1 }} spacing={2} direction="row" justifyContent="end">
        <Box
          sx={{
            position: "relative",
            "&:hover": {
              "& > .MuiBox-root": {
                display: "block",
                opacity: 1,
              },

              "& > .MuiButtonBase-root": {
                background: "#000",
                color: "#fff",
              },
            },
          }}
        >
          <IconButton
            sx={{
              width: "32px",
              height: "32px",
              border: "1px solid silver",
              color: "#7d7f85",
              "&:hover": {
                background: "#000",
                color: "#fff",
              },
            }}
          >
            <PersonOutlined></PersonOutlined>
          </IconButton>
          <Box
            onClick={(e) => {
              e.preventDefault();
            }}
            sx={{
              position: "absolute",
              width: "257px",
              backgroundColor: "#fff",
              display: "none",
              opacity: 0,
              zIndex: 4,
              top: "100%",
              right: "-8px",
              boxShadow: "1px 1px 15px rgba(0,0,0,.15)",
              transition: "all 2s ease-in-out",
              "&::after": {
                content: "''",
                border: "8px solid transparent",
                position: "absolute",
                borderBottomColor: "#fff",
                bottom: "100%",
                right: "16px",
              },
            }}
          >
            <MenuAccount></MenuAccount>
          </Box>
        </Box>

        <Divider sx={{ display: { xs: "none", md: "block" } }} orientation="vertical" flexItem />

        <Box
          sx={{
            position: "relative",
            "&:hover": {
              "& > .MuiBox-root": {
                display: "block",
                opacity: 1,
              },

              "& > .MuiButtonBase-root": {
                background: "#000",
                color: "#fff",
              },
            },
          }}
        >
          <IconButton
            sx={{
              width: "32px",
              height: "32px",
              border: "1px solid silver",
              color: "#7d7f85",
            }}
          >
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  color: "#fff",
                  backgroundColor: "#000",
                },
              }}
            >
              <ShoppingBagOutlined></ShoppingBagOutlined>
            </Badge>
          </IconButton>

          <MenuCart></MenuCart>
        </Box>
      </Stack>
    </Toolbar>
  );
}

export default TopHeader;
