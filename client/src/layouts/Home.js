import React from "react";
import BannerHome from "../components/BannerHome";
import NewsHome from "../components/NewsHome";
import NewArrivals from "../components/NewArrivals";
import BestSeller from "../components/BestSeller";
import { Container } from "@mui/material";

function Home() {
  return (
    <>
      <BannerHome></BannerHome>
      <Container maxWidth="ct">
        <NewsHome></NewsHome>
        <NewArrivals></NewArrivals>
        <BestSeller></BestSeller>
      </Container>
    </>
  );
}

export default Home;
