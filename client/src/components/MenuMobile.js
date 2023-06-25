import React from "react";
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchField from "./SearchField";

function MenuMobile({ open, onToggleMenu }) {
  const navData = useSelector((state) => state.app.nav);

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => {
        onToggleMenu(false);
      }}
    >
      <List sx={{ width: "260px", py: "30px" }}>
        <ListItem sx={{ borderBottom: "1px solid #ececec", p: "20px" }}>
          <SearchField></SearchField>
        </ListItem>
        {navData.map((value, key) => {
          return (
            <ListItem key={key} sx={{ borderBottom: "1px solid #ececec", height: "50px", p: 0 }}>
              <ListItemButton
                sx={{
                  textTransform: "uppercase",
                  fontSize: ".8rem",
                  fontWeight: "700",
                  color: "rgb(102 102 102 / 85%)",
                  px: "20px",
                  py: "15px",
                }}
                to={value.path}
                component={Link}
                onClick={() => {
                  onToggleMenu(false);
                }}
              >
                {value.title}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default MenuMobile;
