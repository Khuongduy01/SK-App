import { useState, useEffect, useCallback } from "react";
import {
  TableContainer,
  Typography,
  Box,
  Button,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Chip,
  FormHelperText,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getAllProducts, newProduct, updateProduct, deleteProduct } from "../util/products";
import {
  UPDATE_PRODUCT,
  NEW_PRODUCT,
  PRODUCT_SIZE_SHOE,
  PRODUCT_SIZE_CLOTHES,
  PRODUCT_BRAND_SHOE,
  PRODUCT_CATEGORY,
} from "../constant";
import { useSnackbar } from "notistack";
import PopoverBase from "./PopoverBase";

const dfProductData = {
  productId: "",
  price: 0,
  name: "",
  quantity: 0,
  sale: 0,
  description: "Hàng chính hãng 100% \nBảo hành 3 tháng \nLỗi 1 đổi 1",
  brand: "",
  category: "",
  size: [],
  thumbnail: null,
  image: [],
};

const columns = [
  { field: "productId", headerName: "ID Sản Phẩm", minWidth: 150 },
  { field: "name", headerName: "Tên Sản Phẩm", minWidth: 150 },
  { field: "price", headerName: "Giá", minWidth: 150 },
  { field: "quantity", headerName: "Số Lượng", minWidth: 150 },
  {
    field: "sale",
    headerName: "Giảm Giá %",
    minWidth: 150,
  },
  {
    field: "description",
    headerName: "Mô Tả",
    minWidth: 150,
  },
  {
    field: "size",
    headerName: "Kích Cỡ",
    minWidth: 150,
  },
  {
    field: "category",
    headerName: "Loại",
    minWidth: 150,
  },
  {
    field: "brand",
    headerName: "Thương hiệu",
    minWidth: 150,
  },
  {
    field: "image",
    headerName: "Hình Ảnh",
    minWidth: 150,
  },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    minWidth: 150,
  },
];

function AdminProduct() {
  const { enqueueSnackbar } = useSnackbar();
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [products, setProducts] = useState([]);
  const [action, setAction] = useState({
    productAction: "",
    productData: dfProductData,
  });
  const [validation, setValidation] = useState({
    productId: "",
    name: "",
    quantity: "",
    sale: "",
    price: "",
    description: "",
    brand: "",
    category: "",
    size: "",
    thumbnail: "",
    image: "",
  });

  const checkValidation = useCallback(
    (validation) => {
      let data = action.productData;
      let err = { ...validation };
      if (data.name.length < 6) {
        err.name = "Tên sản phẩm lớn hơn 6 kí tự";
      } else {
        err.name = "";
      }

      if (data.price < 10000 || data.quantity > 10000000) {
        err.price = "Giá sản phẩm lớn hơn 10.000 nhỏ hơn 10.000.000";
      } else {
        err.price = "";
      }
      if (data.quantity < 1 || data.quantity > 1000) {
        err.quantity = "Số lượng sản phẩm lớn hơn 1 nhỏ hơn 1000";
      } else {
        err.quantity = "";
      }
      if (data.sale < 0 || data.sale > 100) {
        err.sale = "Số lượng sản phẩm lớn hơn hoặc bằng 0 nhỏ hơn hoặc bằng 100";
      } else {
        err.sale = "";
      }
      if (data.description.length < 10 || data.description.length > 1000) {
        err.description = "Mô tả sản phẩm sản phẩm lớn hơn 6 kí tự và nhỏ hơn 15 kí tự";
      } else {
        err.description = "";
      }

      if (data.size.length < 1) {
        err.size = "Chọn ít nhất 1 kích cỡ";
      } else {
        err.size = "";
      }

      if (!data.thumbnail && action.productAction === NEW_PRODUCT) {
        err.thumbnail = "Chọn 1 hình ảnh";
      } else {
        err.thumbnail = "";
      }

      if (
        (data.image.length === 2 && action.productAction === NEW_PRODUCT) ||
        (data.image.length === 3 && action.productAction === NEW_PRODUCT)
      ) {
        err.image = "Chọn 2 hoặc 3 hình ảnh";
      } else {
        err.image = "";
      }

      return setValidation(err);
    },
    [action.productData, action.productAction]
  );

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);

  const handleChangeFrom = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const files = e.target.files;

    console.log(name, value);

    if (name === "image") {
      return setAction({ ...action, productData: { ...action.productData, [name]: files } });
    }

    if (name === "thumbnail") {
      return setAction({ ...action, productData: { ...action.productData, [name]: files[0] } });
    }

    if (name === "size") {
      return setAction({
        ...action,
        productData: { ...action.productData, [name]: typeof value === "string" ? value.split(",") : value },
      });
    }

    if (name === "quantity" || name === "sale" || name === "price") {
      return setAction({
        ...action,
        productData: { ...action.productData, [name]: parseInt(value) },
      });
    }

    if (name === "category") {
      return setAction({
        ...action,
        productData: { ...action.productData, [name]: value },
      });
    }
    setAction({ ...action, productData: { ...action.productData, [name]: value } });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let err = "";
    for (const key in validation) {
      if (validation[key]) {
        err = validation[key];
      }
    }

    console.log(err);

    if (!err) {
      if (action.productAction === NEW_PRODUCT) {
        newProduct(action.productData).then((res) => {
          if (res?.data) {
            enqueueSnackbar(`${action.productAction} ${res?.message}`, { variant: "success" });
            setProducts([...products, res.data]);
            setAction({ ...action, productData: dfProductData });
          } else {
            enqueueSnackbar("Có Lỗi Xảy Ra", { variant: "error" });
          }
        });
      } else {
        updateProduct(action.productData.productId, action.productData).then((res) => {
          if (res?.message) {
            enqueueSnackbar(`${action.productAction} ${res?.message}`, { variant: "success" });
            setAction({ ...action, productData: dfProductData });
            setProducts(
              products.map((obj) => {
                if (obj.productId === action.productData.productId) {
                  return action.productData;
                }
                return obj;
              })
            );
          } else {
            enqueueSnackbar("Có Lỗi Xảy Ra", { variant: "error" });
          }
        });
      }
    } else {
      enqueueSnackbar("Lỗi From", { variant: "error" });
    }
  };

  const handleDeleteProduct = () => {
    deleteProduct(action.productData.productId).then((res) => {
      if (res?.message) {
        setProducts(products.filter((obj) => obj.productId !== action.productData.productId));
        enqueueSnackbar(`Delete ${res?.message}`, { variant: "success" });
        setAction({ ...action, productData: dfProductData });
      } else {
        enqueueSnackbar("Có Lỗi Xảy Ra", { variant: "error" });
      }
    });
  };

  return (
    <>
      {products ? (
        <>
          <Stack>
            <TableContainer>
              <DataGrid
                getRowId={(row) => row.productId}
                rows={products}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                onCellClick={(sell) => {
                  setAction({
                    productAction: UPDATE_PRODUCT,
                    productData: sell.row,
                  });
                }}
              />
            </TableContainer>
            <Stack gap={2} direction={"row"} sx={{ marginLeft: "auto" }}>
              <Button
                sx={{
                  height: "40px",
                  color: "#000",

                  borderRadius: "0",
                  fontWeight: "700",
                  mt: ".5rem",
                  "&:hover": { color: "#000" },
                }}
                onClick={() => {
                  setAction({
                    productAction: NEW_PRODUCT,
                    productData: dfProductData,
                  });
                }}
              >
                Thêm Mới Sản Phẩm
              </Button>
              <Button
                sx={{
                  height: "40px",
                  color: "red",
                  marginLeft: "auto",
                  borderRadius: "0",
                  fontWeight: "700",
                  mt: ".5rem",
                  "&:hover": { color: "red" },
                }}
                onClick={(e) => {
                  if (action?.productData?.productId) setPopoverAnchorEl(e.currentTarget);
                }}
              >
                Xóa Sản Phẩm
              </Button>
              <PopoverBase
                open={Boolean(popoverAnchorEl)}
                handleClose={() => {
                  setPopoverAnchorEl(null);
                }}
                anchorEl={popoverAnchorEl}
                message={`Bạn có muốn xóa sản phẩm ID : ${action?.productData?.productId} ?`}
                okV={"Xoá"}
                cancelV={"Hủy"}
                handleClickOk={() => handleDeleteProduct()}
              ></PopoverBase>
            </Stack>
          </Stack>

          {action.productData.productId || action.productAction === NEW_PRODUCT ? (
            <Box>
              <Typography sx={{ textTransform: "uppercase", fontSize: "20px", fontWeight: "700", py: "8px" }}>
                {action.productAction === UPDATE_PRODUCT ? "Câp nhật Sản Phẩm" : "Thêm Mới Sản Phẩm"}
              </Typography>

              <Typography sx={{ fontSize: "20px", py: "8px" }}>
                <b>ProductId:</b> {action.productData.productId}
              </Typography>

              <Stack
                gap={2}
                component={"form"}
                onSubmit={(e) => {
                  handleSubmitForm(e);
                }}
                encType="multipart/form-data"
                method="post"
              >
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>Tên Sản Phẩm</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="name"
                    name="name"
                    value={action.productData.name}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  />
                  {validation.name && <FormHelperText>{validation.name}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>Giá</InputLabel>
                  <OutlinedInput
                    type="number"
                    inputProps={{ min: "10000", max: "1000000000000", step: "10000" }}
                    label="price"
                    name="price"
                    value={action.productData.price}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  />
                  {validation.price && <FormHelperText>{validation.price}</FormHelperText>}
                </FormControl>

                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>Số Lượng</InputLabel>
                  <OutlinedInput
                    type="number"
                    inputProps={{ min: "0", max: "1000", step: "1" }}
                    label="quantity"
                    name="quantity"
                    value={action.productData.quantity}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  />
                  {validation.quantity && <FormHelperText>{validation.quantity}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>Giảm Giá %</InputLabel>
                  <OutlinedInput
                    type="number"
                    label="sale"
                    inputProps={{ min: "0", max: "100", step: "1" }}
                    name="sale"
                    value={action.productData.sale}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  />
                  {validation.sale && <FormHelperText>{validation.sale}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>Mô Tả</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="description"
                    name="description"
                    minRows={3}
                    multiline
                    value={action.productData.description}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  />
                  {validation.description && <FormHelperText>{validation.description}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel id="select-category-label" sx={{ textTransform: "capitalize" }}>
                    Loại
                  </InputLabel>
                  <Select
                    labelId="select-category-label"
                    id="select-category"
                    value={action.productData.category}
                    name="category"
                    label="category"
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  >
                    {PRODUCT_CATEGORY.map((value, index) => {
                      return (
                        <MenuItem value={value} key={index}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {validation.category && <FormHelperText>{validation.category}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>Thương Hiệu</InputLabel>
                  <Select
                    value={action.productData.brand}
                    name="brand"
                    label="brand"
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  >
                    {action.productData.category === "Giày" ||
                    action.productData.category === "Balo" ||
                    action.productData.category === "Dép" ? (
                      PRODUCT_BRAND_SHOE.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index}>
                            {value}
                          </MenuItem>
                        );
                      })
                    ) : (
                      <MenuItem value="">Chọn Loại Sản Phẩm Trước</MenuItem>
                    )}
                  </Select>
                  {validation.brand && <FormHelperText>{validation.brand}</FormHelperText>}
                </FormControl>
                <FormControl>
                  <InputLabel>Kích Cỡ</InputLabel>
                  <Select
                    multiple
                    value={action.productData.size}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                    name="size"
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => {
                      return (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      );
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 224,
                          width: 250,
                        },
                      },
                    }}
                  >
                    {action.productData.category === "Dép" ||
                    action.productData.category === "Giày" ||
                    action.productData.category === "Tất" ||
                    action.productData.category === "Mũ" ? (
                      PRODUCT_SIZE_SHOE.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index}>
                            {value}
                          </MenuItem>
                        );
                      })
                    ) : action.productData.category === "Quần Áo" ||
                      action.productData.category === "Kính" ||
                      action.productData.category === "Balo" ||
                      action.productData.category === "Kí Gửi" ? (
                      PRODUCT_SIZE_CLOTHES.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index}>
                            {value}
                          </MenuItem>
                        );
                      })
                    ) : (
                      <MenuItem value="">Chọn Loại Sản Phẩm Trước</MenuItem>
                    )}
                  </Select>
                  {validation.size && <FormHelperText>{validation.size}</FormHelperText>}
                </FormControl>

                {action.productAction === NEW_PRODUCT ? (
                  <>
                    <Box>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{
                          color: "rgb(0 0 0 / 62%)",
                          borderRadius: "4px",
                          border: "1px solid rgb(0 0 0 / 23%)",
                          height: "56px",
                          padding: "16px",
                        }}
                      >
                        <Typography component={"label"} htmlFor="image" sx={{ marginRight: "10px" }}>
                          Hình Ảnh:
                          {![...action.productData.image].length
                            ? "Nhấp Chuột Để Upload File"
                            : `Số File Đã Chọn ${[...action.productData.image].length}`}
                        </Typography>
                        <input
                          name="image"
                          type="file"
                          id="image"
                          multiple
                          style={{ display: "none" }}
                          onChange={(e) => {
                            handleChangeFrom(e);
                          }}
                        />
                        <div>
                          {action.productData.image &&
                            [...action.productData.image].map((value, index) => {
                              return (
                                <span style={{ margin: "0 10px" }} key={index}>{`${value.name} - ${value.type}`}</span>
                              );
                            })}
                        </div>
                        {validation.image && <FormHelperText>{validation.image}</FormHelperText>}{" "}
                      </Stack>
                    </Box>
                    <Box>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{
                          color: "rgb(0 0 0 / 62%)",
                          borderRadius: "4px",
                          border: "1px solid rgb(0 0 0 / 23%)",
                          height: "56px",
                          padding: "16px",
                        }}
                      >
                        <Typography component={"label"} htmlFor="thumbnail" sx={{ marginRight: "10px" }}>
                          Thumbnail:
                          {!action.productData.thumbnail ? "Nhấp Chuột Để Upload File" : `File Đã Chọn  `}
                        </Typography>
                        <input
                          name="thumbnail"
                          type="file"
                          id="thumbnail"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            handleChangeFrom(e);
                          }}
                        />
                        <div>
                          {action.productData.thumbnail ? (
                            `${action.productData.thumbnail.name} - ${action.productData.thumbnail.type}`
                          ) : (
                            <></>
                          )}
                        </div>
                        {validation.thumbnail && <FormHelperText>{validation.thumbnail}</FormHelperText>}
                      </Stack>
                    </Box>
                  </>
                ) : (
                  <></>
                )}

                <button
                  type="submit"
                  style={{
                    cursor: "pointer",
                    height: "40px",
                    color: "#000",
                    width: "fit-content",
                    marginLeft: "auto",
                    borderRadius: "0",
                    fontWeight: "700",
                    mt: ".5rem",
                    "&:hover": { color: "#000" },
                    value: "Thêm Mới",
                  }}
                >
                  {action.productAction === UPDATE_PRODUCT ? "Cập nhật sản phẩm" : "Thêm Sản Phẩm"}
                </button>
              </Stack>
            </Box>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AdminProduct;
