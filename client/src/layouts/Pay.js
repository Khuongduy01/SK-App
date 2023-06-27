import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FormPay from "../components/FormPay";
import CartPay from "../components/CartPay";
function Pay() {
  return (
    <Container maxWidth="ct">
      <Box p="16px 16px 24px 16px">
        <Link to="/">
          <Box
            component="img"
            sx={{
              maxHeight: "120px",
              display: "block",
              margin: "0 auto",
              py: "10px",
            }}
            alt="logo"
            src="\imgs\logo.jpg"
          />
        </Link>
        <Grid container spacing={4} sx={{ mt: "54px" }}>
          <Grid item xs={12} lg={6}>
            <FormPay></FormPay>
          </Grid>
          <Grid item xs={12} lg={6}>
            <CartPay></CartPay>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Pay;
