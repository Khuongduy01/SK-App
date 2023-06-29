import React from "react";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

const StyledMaterialDesignContent = styled(MaterialDesignContent)({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#2D7738",
  },
  "&.notistack-MuiContent-default": {
    backgroundColor: "#2D7738",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#970C0C",
  },
});

function SnackbarBase({ children }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

export default SnackbarBase;
