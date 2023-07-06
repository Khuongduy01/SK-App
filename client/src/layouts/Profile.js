import React, { useCallback, useState } from "react";
import { Container, Box, Tabs, Tab, Typography, Grid, Divider, TextField, styled, Button } from "@mui/material";
import { Person, Lock, FormatListBulleted } from "@mui/icons-material";
import SelectAddress from "../components/SelectAddress";
import { useSelector, useDispatch } from "react-redux";
import { updateUser as putUpdateUser } from "../util/user";
import { updateUser } from "../redux/slice/userSlice";

function Profile() {
  const [value, setValue] = useState(0);
  const { data, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeInput = useCallback(
    (e) => {
      const name = e?.target?.name;
      const value = e?.target?.value;
      if ((name, value)) {
        dispatch(updateUser({ [name]: value }));
      } else {
        dispatch(updateUser(e));
      }
    },
    [dispatch]
  );

  const handleUpdateUser = () => {
    putUpdateUser(data).then((res) => {
      console.log(res);
    });
  };

  const LabelForm = styled(Typography)({
    marginBottom: "1rem",
    fontSize: ".9rem",
    fontWeight: "700",
    color: "#222",
  });

  const ErrorForm = styled(Box)({
    fontSize: ".8rem",
    fontWeight: "700",
    margin: "4px 0",
    color: "red",
  });

  const BtnSubmitFrom = styled(Button)({
    height: "40px",
    color: "#fff",
    backgroundColor: "#000",
    fontWeight: "700",
    mt: ".5rem",
    "&:hover": { color: "#fff", backgroundColor: "#000" },
  });

  if (status) {
  }
  return (
    <Container maxWidth="ct">
      <Box p="16px 16px 24px 16px">
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "#202020",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Trang Cá Nhân
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={4} padding={{ xs: "0", sm: "60px 15px" }}>
            <Typography
              fontSize={"24px"}
              fontWeight={700}
              marginBottom={"12px"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              {data.userName}
            </Typography>
            <Divider />
            <Tabs
              onChange={handleChangeTabs}
              value={value}
              orientation="vertical"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              sx={{
                color: "#446084",
                "& .MuiTab-root": {
                  height: "40px",
                  maxHeight: "40px",
                  minHeight: "0",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "12px",
                  my: "6px",
                },
                "& .MuiTab-root.Mui-selected": {
                  fontWeight: "700",
                },
              }}
            >
              <Tab label="Hồ Sơ Của Tôi" icon={<Person />} id="tab1" iconPosition="start" />
              <Tab label="Đổi Mật Khẩu" icon={<Lock />} id="tab2" iconPosition="start" />
              <Tab label="Đơn Hàng Của Tôi" icon={<FormatListBulleted />} id="tab3" iconPosition="start" />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            padding={{ xs: "0", sm: "60px 15px 60px 35px" }}
            borderLeft={{ xs: "0", sm: "1px solid #dedede" }}
          >
            <Box index={0} value={value} hidden={value !== 0} component={"form"}>
              <Typography fontSize={"24px"} marginBottom={"12px"}>
                Thông Tin Cá Nhân
              </Typography>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Họ Và tên</LabelForm>
                <TextField
                  type="text"
                  fullWidth
                  value={data.fullName || ""}
                  name="fullName"
                  onChange={(e) => handleChangeInput(e)}
                />
                <ErrorForm></ErrorForm>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Số Điện Thoại</LabelForm>
                <TextField
                  type="text"
                  fullWidth
                  value={data.phone || ""}
                  name="phone"
                  onChange={(e) => handleChangeInput(e)}
                />
                <ErrorForm></ErrorForm>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Gmail</LabelForm>
                <TextField
                  type="gmail"
                  value={data.gmail || ""}
                  fullWidth
                  name="gmail"
                  onChange={(e) => handleChangeInput(e)}
                />
                <ErrorForm></ErrorForm>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Địa chỉ</LabelForm>
                <TextField
                  type="text"
                  fullWidth
                  value={data.addressDescription || ""}
                  name="addressDescription"
                  onChange={(e) => handleChangeInput(e)}
                />
                <ErrorForm></ErrorForm>
              </Box>
              <SelectAddress handleSelect={handleChangeInput} name="address" value={data.address}></SelectAddress>
              <BtnSubmitFrom onClick={handleUpdateUser}> Cập Nhật Thông Tin</BtnSubmitFrom>
            </Box>
            <Box index={1} value={value} hidden={value !== 1} component={"form"}>
              <Typography fontSize={"24px"} marginBottom={"12px"}>
                Thay Đổi Mật Khẩu
              </Typography>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Mật Khẩu Cũ</LabelForm>
                <TextField type="password" fullWidth autoComplete="on" name="password1" />
                <ErrorForm></ErrorForm>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Mật Khẩu Mới</LabelForm>
                <TextField type="password" fullWidth autoComplete="on" name="password2" />
                <ErrorForm></ErrorForm>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Nhập Lại Mật Khẩu Mới</LabelForm>
                <TextField type="password" fullWidth autoComplete="on" name="password3" />
                <ErrorForm></ErrorForm>
              </Box>
              <BtnSubmitFrom>Thay Đổi Mật Khẩu</BtnSubmitFrom>
            </Box>

            <Box index={2} value={value} hidden={value !== 2}>
              <Typography fontSize={"24px"} marginBottom={"12px"}>
                Đơn Hàng
              </Typography>
              Danh Sách Đơn Hàng
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Profile;
