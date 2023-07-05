import React from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

function ContentFooter() {
  const FooterTitle = styled(Typography)({
    color: "#555",
    textTransform: "uppercase",
    fontWeight: "700",
    paddingBottom: "3px",
    marginBottom: "32px",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: "-1rem",
      display: "block",
      width: "30px",
      height: "3px",
      backgroundColor: "rgb(0 0 0 / 10%)",
    },
  });

  const FooterText = styled(Typography)({
    color: "#777",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: "16px",
  });
  const FooterLink = styled(Link)({
    color: "#446084",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: "16px",
    textDecoration: "none",
    display: "block",
  });

  return (
    <Box sx={{ mt: "30px" }}>
      <Container maxWidth="ct">
        <Grid container>
          <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ pt: "25px", px: "15px", pb: "30px" }}>
              <Link to="/">
                <Box component="img" src="/imgs/logo.jpg" alt="logo" sx={{ p: "15px", width: "100%" }}></Box>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ pt: "25px", px: "15px", pb: "30px" }}>
              <FooterTitle>thông tin liên hệ</FooterTitle>
              <FooterText>Địa chỉ: 102 Thái Thịnh, Đống Đa, Hà Nội</FooterText>
              <FooterText>Email: contact@nhanh.vn</FooterText>
              <FooterText>Hotline: 1900.2818</FooterText>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box sx={{ pt: "25px", px: "15px", pb: "30px" }}>
              <FooterTitle>chính sách</FooterTitle>
              <FooterLink to="/cart">Tra cứu đơn hàng</FooterLink>
              <FooterText>Hotline hỗ trợ đơn hàng: 1900.2818</FooterText>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box sx={{ pt: "25px", px: "15px", pb: "30px" }}>
              <FooterTitle>hỗ trợ</FooterTitle>
              <FooterLink to="/tuyendung">tuyển dụng</FooterLink>
              <FooterLink to="/gioithieu">giới thiệu</FooterLink>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box sx={{ pt: "25px", px: "15px", pb: "30px" }}>
              <FooterTitle>mạng xã hội</FooterTitle>
              <FooterLink as={"a"} href="https://www.facebook.com/" target="_blank">
                facebook
              </FooterLink>
              <FooterLink as={"a"} href="https://www.instagram.com/" target="_blank">
                Instargram{" "}
              </FooterLink>
              <FooterLink as={"a"} href="https://www.youtube.com/" target="_blank">
                Youtube
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContentFooter;
