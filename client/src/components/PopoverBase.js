import React from "react";
import { Popover, Stack, Typography, Button, Box } from "@mui/material";

function PopoverBase({
  anchorEl,
  id = "",
  open = false,
  handleClose = () => {},
  message = "",
  okV = "",
  cancelV = "",
  handleClickOk = () => {},
}) {
  return (
    <Popover
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box sx={{ padding: "12px" }} maxWidth={"250px"}>
        <Typography>{message}</Typography>
        <Stack direction={"row"} gap={"12px"} justifyContent={"end"}>
          <Button
            color="success"
            onClick={() => {
              handleClickOk();
              handleClose();
            }}
          >
            {okV}
          </Button>
          <Button
            color="info"
            onClick={() => {
              handleClose();
            }}
          >
            {cancelV}
          </Button>
        </Stack>
      </Box>
    </Popover>
  );
}

export default PopoverBase;
