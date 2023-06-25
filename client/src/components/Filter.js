import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  styled,
  FormControlLabel,
  Checkbox,
  Slider,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import numberWithCommas from "../util/numberWithCommas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Filter() {
  const [open, setOpen] = useState(false);
  const [valueRange, setValueRange] = useState([0, 10000000]);
  const navData = useSelector((state) => state.app.nav);

  const handleChangeRange = (event) => {
    setValueRange(event.target.value);
  };

  const handleClick = (value) => {
    if (value === open) {
      return setOpen(false);
    }
    setOpen(value || false);
  };

  const ListItemBtn = styled(ListItemButton)({
    padding: "6px 0 6px 0",
    color: "#000",
    height: "38px",
  });

  const TitleFilter = styled(Typography)({
    color: "#777",
    textTransform: "uppercase",
    fontWeight: "700",
    paddingBottom: "3px",
    marginBottom: "26px",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: "-0.66rem",
      display: "block",
      width: "30px",
      height: "3px",
      backgroundColor: "rgb(0 0 0 / 10%)",
    },
  });

  // const Range = styled(Slider)({
  //   backgroundColor: "#fff",
  //   color: "#333",
  //   height: 3,
  //   "& .MuiSlider-thumb": {
  //     height: 16,
  //     width: 16,
  //     backgroundColor: "#333",
  //     border: "1px solid #333",
  //     "&:hover": {
  //       backgroundColor: "#fff",
  //     },
  //   },
  //   "& .MuiSlider-rail": {
  //     backgroundColor: "#fff",
  //     border: "1px solid #ccc",
  //   },
  // });

  return (
    <Stack>
      <TitleFilter>DANH MỤC</TitleFilter>
      <List sx={{ width: "100%" }} component="nav">
        {navData.map((value, index) => {
          return (
            <Box key={index + 1}>
              {value.content ? (
                <>
                  <ListItemBtn
                    divider
                    onClick={() => {
                      handleClick(index + 1);
                    }}
                  >
                    <ListItemText
                      primary={value.title}
                      sx={{
                        textTransform: "capitalize",
                        "& .MuiTypography-root": {
                          fontWeight: "700",
                        },
                      }}
                    />
                    {open === index + 1 ? <Remove /> : <Add />}
                  </ListItemBtn>
                  <Collapse in={open === index + 1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {value?.content &&
                        value.content.map((item, index) => (
                          <ListItemBtn divider key={index + 1} component={Link} to={item.path}>
                            <ListItemText
                              primary={item.title}
                              sx={{
                                textTransform: "capitalize",
                              }}
                            />
                          </ListItemBtn>
                        ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemBtn divider component={Link} to={value.path}>
                  <ListItemText
                    primary={value.title}
                    sx={{
                      textTransform: "capitalize",
                      "& .MuiTypography-root": {
                        fontWeight: "700",
                      },
                    }}
                  />
                </ListItemBtn>
              )}
            </Box>
          );
        })}
      </List>
      <TitleFilter>Kích Thước</TitleFilter>

      {[...Array(5)].map((_, index) => {
        return (
          <FormControlLabel
            key={index}
            value={`${40 + index}`}
            control={<Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />}
            label={`${40 + index}`}
            labelPlacement={"end"}
            sx={{ py: "6px", color: "#000" }}
          />
        );
      })}
      <TitleFilter>Lọc Theo Giá</TitleFilter>

      <Stack justifyContent={"space-between"} direction={"row"}>
        <Typography variant="p">Từ: {numberWithCommas(valueRange[0])} Đ</Typography>
        <Typography variant="p">Đến: {numberWithCommas(valueRange[1])} Đ</Typography>
      </Stack>

      <Slider
        value={valueRange}
        onChange={(e) => {
          handleChangeRange(e);
        }}
        max={10000000}
        min={0}
      />
    </Stack>
  );
}

export default Filter;
