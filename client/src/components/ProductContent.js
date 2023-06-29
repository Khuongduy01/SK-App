import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  ButtonBase,
  Divider,
  ButtonGroup,
  InputBase,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  styled,
} from "@mui/material";
import { YouTube, Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ProductContent() {
  const [sizeValue, setSizeValue] = useState("40");
  const [quantityValue, setQuantityValue] = useState(1);

  const handleChangeSize = (e) => {
    setSizeValue(e.target.value);
  };

  const ToggleButtonCustom = styled(ToggleButton)(() => ({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#fff",
      backgroundColor: "#000",
    },
  }));

  const CartButton = styled(ButtonBase)(() => ({
    backgroundColor: "#202020",
    borderRadius: "99px",
    color: "#fff",
    padding: "0 10px 0 10px",
    opacity: ".6",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
  }));

  const TextInfo = styled(Typography)(() => ({
    margin: ".5rem 0 .5rem 0",
    fontSize: ".8rem",
    color: "#777",
  }));

  const handleQuantityValue = (e, fil) => {
    var value = parseFloat(e.target.value);
    switch (fil) {
      case "prev":
        setQuantityValue(quantityValue - 1);
        break;
      case "change":
        setQuantityValue(value || 1);
        break;
      case "plus":
        setQuantityValue(quantityValue + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ p: "10px 15px 30px 15px" }}>
      <Typography
        variant="body1"
        color="initial"
        sx={{ color: "#555", fontSize: "1.7rem", marginBottom: ".5rem", fontWeight: "700" }}
      >
        Tất HAPPY SOCKS Zebra
      </Typography>
      <Stack direction={"row"} sx={{ m: ".5rem", gap: "8px" }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ color: "#111", fontSize: "1.5rem", opacity: "0.6", textDecoration: "line-through" }}
        >
          450.000
          <sup>đ</sup>
        </Typography>
        <Typography variant="body1" color="initial" sx={{ color: "#ff2419", fontSize: "1.5rem", fontWeight: "700" }}>
          450.000
          <sup>đ</sup>
        </Typography>
      </Stack>
      <Stack direction={"row"} sx={{ mb: "1.5rem" }} alignItems={"center"}>
        <Typography variant="body1" color="initial" sx={{ fontWeight: "700", fontSize: ".9rem", width: "20%" }}>
          Size
        </Typography>
        <ToggleButtonGroup
          value={sizeValue}
          exclusive
          color="error"
          onChange={(e) => {
            handleChangeSize(e);
          }}
          sx={{ my: "6px", display: "flex", flexDirection: "row", justifyContent: "start", gap: "12px" }}
        >
          <ToggleButtonCustom
            value={"40"}
            sx={{
              color: "rgba(33,33,33,1)",
              width: "35px",
              height: "35px",
              fontSize: "13px",
              boxShadow: "0 0 0 1px #ccc",
              backgroundColor: "#fff",
              border: "0",
              borderRadius: 0,
            }}
          >
            40
          </ToggleButtonCustom>
          <ToggleButtonCustom
            value={"41"}
            sx={{
              color: "rgba(33,33,33,1)",
              width: "35px",
              height: "35px",
              fontSize: "13px",
              boxShadow: "0 0 0 1px #ccc",
              backgroundColor: "#fff",
              border: "0",
              borderRadius: 0,
            }}
          >
            41
          </ToggleButtonCustom>
        </ToggleButtonGroup>
      </Stack>
      <Divider sx={{ borderStyle: "dotted" }} />
      <Typography variant="body1" color="initial" sx={{ py: "16px", color: "#77a464", fontWeight: "700" }}>
        Còn Hàng
      </Typography>
      <Stack direction={"row"} sx={{ height: "56px", py: ".5rem", mb: "1rem", gap: "8px" }}>
        <ButtonGroup variant="outlined" sx={{ mr: "8px" }}>
          <ButtonBase
            sx={{
              border: "1px solid rgba(0,0,0,.09)",
              padding: "0 .5rem",
              width: "24px",
              borderBottomLeftRadius: "99px",
              borderTopLeftRadius: "99px",
              backgroundColor: "rgb(0 0 0 / 3%)",
            }}
            onClick={(e) => {
              handleQuantityValue(e, "prev");
            }}
          >
            -
          </ButtonBase>
          <InputBase
            value={quantityValue}
            sx={{
              borderTop: "1px solid rgba(0,0,0,.09)",
              borderBottom: "1px solid rgba(0,0,0,.09)",
              width: "40px",
              backgroundColor: "rgb(0 0 0 / 3%)",
              padding: "0",
              "& input": {
                textAlign: "center",
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                display: "none",
              },
            }}
            onChange={(e) => {
              handleQuantityValue(e, "change");
            }}
          />
          <ButtonBase
            sx={{
              border: "1px solid rgba(0,0,0,.09)",
              padding: "0 .5rem",
              width: "24px",
              backgroundColor: "rgb(0 0 0 / 3%)",
              borderBottomRightRadius: "99px",
              borderTopRightRadius: "99px",
            }}
            onClick={(e) => {
              handleQuantityValue(e, "plus");
            }}
          >
            +
          </ButtonBase>
        </ButtonGroup>
        <CartButton component={Link}>Thêm Vào Giỏ Hàng</CartButton>
        <CartButton component={Link} to={"/cart"}>
          Mua Ngay
        </CartButton>
      </Stack>
      <Button
        fullWidth
        sx={{
          height: "40px",
          color: "#fff",
          backgroundColor: "#000",
          fontWeight: "700",
          mb: "1rem",
          textTransform: "capitalize",
          "&:hover": { color: "#fff", backgroundColor: "#000" },
        }}
      >
        Liên hệ chúng tôi
      </Button>
      <Divider sx={{ borderStyle: "dotted" }} />
      <TextInfo variant="body1" color="initial">
        Mã: Black
      </TextInfo>
      <Divider sx={{ borderStyle: "dotted" }} />
      <TextInfo variant="body1" color="initial">
        Danh Mục: Tất
      </TextInfo>

      <Stack direction={"row"} sx={{ mt: "1rem" }}>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <YouTube />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <Pinterest />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ProductContent;
