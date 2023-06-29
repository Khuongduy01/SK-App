import { useState, useEffect } from "react";
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
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getAllProducts } from "../util/products";
import {
  UPDATE_PRODUCT,
  NEW_PRODUCT,
  PRODUCT_SIZE_SHOE,
  PRODUCT_SIZE_CLOTHES,
  PRODUCT_BRAND_SHOE,
  PRODUCT_CATEGORY,
} from "../constant";

const dfProductData = {
  productId: "",
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

function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [action, setAction] = useState({
    productAction: "",
    productData: dfProductData,
  });

  console.log(action);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleChangeFrom = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const files = e.target.files;

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

    if (name === "category") {
      return setAction({
        ...action,
        productData: { ...action.productData, [name]: value, size: [] },
      });
    }
    setAction({ ...action, productData: { ...action.productData, [name]: value } });
  };

  const handleSubmitForm = () => {
    console.log(action.productData);
  };

  const columns = [
    { field: "productId", headerName: "ID", minWidth: 150 },
    { field: "name", headerName: "name", minWidth: 150 },
    { field: "quantity", headerName: "quantity", minWidth: 150 },
    {
      field: "sale",
      headerName: "sale",
      minWidth: 150,
    },
    {
      field: "description",
      headerName: "description",
      minWidth: 150,
    },
    {
      field: "size",
      headerName: "size",
      minWidth: 150,
    },
    {
      field: "category",
      headerName: "category",
      minWidth: 150,
    },
    {
      field: "image",
      headerName: "image",
      minWidth: 150,
    },
    {
      field: "thumbnail",
      headerName: "thumbnail",
      minWidth: 150,
    },
  ];

  return (
    <>
      {products && (
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
                onClick={() => {
                  console.log("delete");
                }}
              >
                Xóa Sản Phẩm
              </Button>
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

              <Stack gap={2}>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>name</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="name"
                    name="name"
                    value={action.productData.name}
                    onChange={(e) => {
                      handleChangeFrom(e);
                    }}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>quantity</InputLabel>
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
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>sale</InputLabel>
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
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>description</InputLabel>
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
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel id="select-category-label" sx={{ textTransform: "capitalize" }}>
                    category
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
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel sx={{ textTransform: "capitalize" }}>brand</InputLabel>
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
                </FormControl>
                <FormControl>
                  <InputLabel>size</InputLabel>
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
                    action.productData.category === "Tất" ? (
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
                </FormControl>

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
                    Image:
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
                        return <span style={{ margin: "0 10px" }} key={index}>{`${value.name} - ${value.type}`}</span>;
                      })}
                  </div>
                </Stack>

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
                </Stack>

                <Button
                  sx={{
                    height: "40px",
                    color: "#000",
                    width: "fit-content",
                    marginLeft: "auto",
                    borderRadius: "0",
                    fontWeight: "700",
                    mt: ".5rem",
                    "&:hover": { color: "#000" },
                  }}
                  onClick={handleSubmitForm}
                >
                  Thêm Mới
                </Button>
              </Stack>
            </Box>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default AdminProduct;
