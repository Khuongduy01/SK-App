import React from "react";
import { Toolbar, Stack, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchField from "./SearchField";
import MultiMenuItem from "./MultiMenuItem";

function BottomHeader() {
  const navData = useSelector((state) => state.app.nav);

  return (
    <Toolbar
      sx={{
        mx: 2,
        display: { xs: "none", md: "flex" },
        height: "82px",
        borderTop: "1px solid #f2f2f2",
      }}
      disableGutters
    >
      <Stack sx={{ minWidth: "600px", mx: "auto", mb: "12px" }}>
        <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
          {navData.map((value, key) => {
            return (
              <Box
                key={key}
                sx={{
                  position: "relative",
                  "&:hover": {
                    "& > .MuiStack-root": {
                      display: "block",
                      opacity: 1,
                    },
                  },
                }}
              >
                <Link to={value.path} style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      py: "10px",
                      px: "12px",
                      textTransform: "capitalize",
                      fontSize: ".9rem",
                      color: "rgb(102 102 102 / 85%)",
                      position: "relative",
                      fontWeight: "700",
                      "&::after": {
                        content: "''",
                      },

                      "&:hover": {
                        "&::after": {
                          position: "absolute",
                          display: "block",
                          backgroundColor: "#202020",
                          left: "0",
                          height: "3px",
                          width: "100%",
                          transition: "all 0.2s ease-in-out",
                        },
                      },
                    }}
                  >
                    {value.title}
                  </Typography>
                </Link>
                {value.content && (
                  <Stack
                    sx={{
                      position: "absolute",
                      opacity: 0,
                      top: "90%",
                      display: "none",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    {value.content.map((value1, key1) => {
                      return <MultiMenuItem data={value1} key={key1}></MultiMenuItem>;
                    })}
                  </Stack>
                )}
              </Box>
            );
          })}
        </Stack>
        <SearchField></SearchField>
      </Stack>
    </Toolbar>
  );
}

export default BottomHeader;
