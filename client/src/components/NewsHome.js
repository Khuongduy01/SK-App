import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TitleHome from "./TitleHome";
import { Link } from "react-router-dom";

function NewsHome() {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <TitleHome>New Home</TitleHome>
      <Grid container spacing={{ xs: 0, lg: 2 }}>
        <Grid item xs={3} sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              "&:hover": {
                img: {
                  scale: "1.2",
                  transition: "all 1s ease-in-out",
                },
              },
            }}
          >
            <Link to="/">
              <Box
                component={"img"}
                src="/imgs/new1.webp"
                alt="new1"
                sx={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }}
              />
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                color="initial"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                  color: "#fff",
                  fontSize: {
                    xs: ".8rem",
                    md: "1.4rem",
                  },
                  textShadow: "1px 1px 1px rgba(0,0,0,.5)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Sale
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              "&:hover": {
                img: {
                  scale: "1.2",
                  transition: "all 1s ease-in-out",
                },
              },
            }}
          >
            <Link to="/">
              <Box
                component={"img"}
                src="/imgs/aboutus.png"
                alt="aboutus"
                sx={{ width: "100 %", height: "100%", objectFit: "cover", maxWidth: "100%" }}
              />
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                color="initial"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                  color: "#fff",
                  fontSize: {
                    xs: "1.2rem",
                    md: "1.6rem",
                  },
                  textShadow: "1px 1px 1px rgba(0,0,0,.5)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                About us
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              "&:hover": {
                img: {
                  scale: "1.2",
                  transition: "all 1s ease-in-out",
                },
              },
            }}
          >
            <Link to="/">
              <Box
                component={"img"}
                src="/imgs/new1.webp"
                alt="new1"
                sx={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }}
              />
            </Link>
            <Link to="/">
              <Typography
                className="NewText"
                variant="p"
                color="initial"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                  color: "#fff",
                  fontSize: {
                    xs: ".8rem",
                    md: "1.4rem",
                  },
                  textShadow: "1px 1px 1px rgba(0,0,0,.5)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Super Sale
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewsHome;
