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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import numberWithCommas from "../util/numberWithCommas";
import { pushCartItem } from "../redux/slice/userSlice";
import { useSnackbar } from "notistack";

function ProductContent({ data }) {
  const [sizeValue, setSizeValue] = useState(data.size[0]);
  const [quantityValue, setQuantityValue] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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
    var value = parseInt(e.target.value);
    switch (fil) {
      case "prev":
        setQuantityValue(quantityValue > 1 ? quantityValue - 1 : 1);
        break;
      case "change":
        setQuantityValue(!isNaN(value) ? value : "");
        break;
      case "plus":
        setQuantityValue(quantityValue < data.quantity ? quantityValue + 1 : data.quantity);
        break;
      default:
        break;
    }

    if (quantityValue > data.quantity) {
      setQuantityValue(data.quantity);
    }
  };

  const handlePushCard = () => {
    if (typeof quantityValue === "number" && quantityValue <= data.quantity && quantityValue > 0) {
      dispatch(
        pushCartItem({
          ...data,
          cartQuatity: quantityValue,
          cartSize: sizeValue,
          priceDrop: data.price - (data.price * data.sale) / 100,
        })
      );
      setSizeValue(data.size[0]);
      setQuantityValue(1);
      enqueueSnackbar("Thêm Sản Phẩm Thành Công", { variant: "success" });
    } else {
      enqueueSnackbar("Thêm Sản Phẩm Thất bại", { variant: "error" });
    }
  };

  return (
    <Box sx={{ p: "10px 15px 30px 15px" }}>
      <Typography
        variant="body1"
        color="initial"
        sx={{ color: "#555", fontSize: "1.7rem", marginBottom: ".5rem", fontWeight: "700" }}
      >
        {data.name}
      </Typography>
      <Stack direction={"row"} sx={{ m: ".5rem", gap: "8px" }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ color: "#111", fontSize: "1.5rem", opacity: "0.6", textDecoration: "line-through" }}
        >
          {numberWithCommas(data.price)}
          <sup>đ</sup>
        </Typography>
        <Typography variant="body1" color="initial" sx={{ color: "#ff2419", fontSize: "1.5rem", fontWeight: "700" }}>
          {numberWithCommas(data.price - (data.price * data.sale) / 100)}
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
          {data.size.map((size, i) => {
            return (
              <ToggleButtonCustom
                value={size}
                key={i}
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
                {size}
              </ToggleButtonCustom>
            );
          })}
        </ToggleButtonGroup>
      </Stack>
      <Divider sx={{ borderStyle: "dotted" }} />
      <Typography variant="body1" color="initial" sx={{ py: "16px", color: "#77a464", fontWeight: "700" }}>
        {data.quantity > 0 ? `Còn Hàng ${data.quantity}` : "Hết Hàng"}
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
        <CartButton
          component="a"
          onClick={() => {
            handlePushCard();
          }}
        >
          Thêm Vào Giỏ Hàng
        </CartButton>
        <CartButton
          component="a"
          onClick={() => {
            handlePushCard();
            navigate("/cart");
          }}
        >
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
        Mã: {data.productId}
      </TextInfo>
      <Divider sx={{ borderStyle: "dotted" }} />
      <TextInfo variant="body1" color="initial">
        Danh Mục: {data.category}
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
