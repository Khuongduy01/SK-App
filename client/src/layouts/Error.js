import React from "react";
import { Box, Stack, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Container maxWidth="ct">
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Box component={"img"} src="/imgs/NotFound.png" alt="NotFound" sx={{ width: "70%" }} />
        <Button variant="contained" component={Link} to={"/"}>
          Về Trang Chủ
        </Button>
      </Stack>
    </Container>
  );
}

export default Error;
