import { useState } from "react";

import { Collapse, Button, Stack, Typography, styled } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function DescriptionProducts() {
  const [open, setOpen] = useState(false);

  const CollapseText = styled(Typography)({
    marginBottom: "16px",
    color: "#777",
  });
  return (
    <div>
      <Button
        startIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        disableRipple
        onClick={() => {
          setOpen(!open);
        }}
        sx={{
          width: "100%",
          height: "40px",
          alignItems: "center",
          justifyContent: "start",
          color: "#202020",
          textTransform: "capitalize",
          fontWeight: "700",
          backgroundColor: "rgb(0 0 0 / 3%)",
          borderTop: "1px solid #ddd",
          borderRadius: "0",
        }}
      >
        Thông tin bổ sung
      </Button>
      <Collapse in={open}>
        <Stack sx={{ px: "34px", py: "16px" }}>
          <CollapseText>Hàng chính hãng 100%</CollapseText>
          <CollapseText>Hàng chính hãng 10%</CollapseText>
          <CollapseText>Hàng chính hãng 1%</CollapseText>
        </Stack>
      </Collapse>
    </div>
  );
}

export default DescriptionProducts;
