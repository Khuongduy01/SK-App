import React from "react";
import { Breadcrumbs, styled } from "@mui/material";
import { Link } from "react-router-dom";

function BreadcrumbsApp() {
  const BreadcrumbsLink = styled(Link)({
    color: "rgb(102 102 102 / 70%)",
    textTransform: "capitalize",
  });
  return (
    <Breadcrumbs sx={{ display: "flex", justifyContent: { xs: "center", lg: "start" }, alignItems: "center" }}>
      <BreadcrumbsLink to="/">Trang Chủ</BreadcrumbsLink>
      <BreadcrumbsLink to="/product" sx={{ fontWeight: "700", color: "#222" }}>
        product
      </BreadcrumbsLink>
    </Breadcrumbs>
  );
}

export default BreadcrumbsApp;
