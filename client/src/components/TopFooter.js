import React from "react";
import { Box, Stack, Typography, InputBase, Button, Container } from "@mui/material";

function TopFooter() {
  return (
    <Box sx={{ mt: "20px", py: "24px", boxShadow: "0px 0px 15px 0px rgba(119,119,119,.4)" }}>
      <Container maxWidth="ct">
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between">
          <Typography
            variant="body1"
            sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "#555555",
              px: "15px",
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            Đăng kí nhận ưu đãi từ Sneakerhome
          </Typography>
          <Stack direction="row" sx={{ flex: 1, px: "15px", minHeight: "40px" }} justifyContent="space-between">
            <InputBase
              sx={{
                flex: 1,
                color: "#777",
                backgroundColor: "rgb(0 0 0 / 3%)",
                fontSize: ".8rem",
                borderRadius: "99px",
                px: "12px",
                border: "1px solid rgba(0,0,0,.09)",
              }}
              placeholder="Your Email(required)"
            />
            <Button
              sx={{
                mx: "1rem",
                backgroundColor: "#202020",
                color: "#fff",
                borderRadius: "99px",
                p: "0 1.2rem",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "#202020",
                  color: "#fff",
                },
              }}
            >
              SIGNUP
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default TopFooter;
