import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
  return (
    <Container maxWidth="ct">
      <Box pt="20px">
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "#202020",
            textAlign: "center",
            textTransform: "uppercase",
            mb: "8px",
          }}
        >
          ADMIN
        </Typography>

        {user.data.permission === "admin" ? (
          <>
            <Button
              component={Link}
              to="/admin/user"
              sx={{
                height: "40px",
                color: "#000",

                borderRadius: "0",
                fontWeight: "700",
                mt: ".5rem",
                "&:hover": { color: "#000" },
              }}
            >
              User
            </Button>
            <Button
              component={Link}
              to="/admin/product"
              sx={{
                height: "40px",
                color: "#000",

                borderRadius: "0",
                fontWeight: "700",
                mt: ".5rem",
                "&:hover": { color: "#000" },
              }}
            >
              Product
            </Button>
            <Outlet />
          </>
        ) : (
          <>
            <Typography>Bạn ko có Quyền Admin</Typography>
            <Typography>
              Quay Về
              <Link to="/"> Home</Link>
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}

export default Admin;
