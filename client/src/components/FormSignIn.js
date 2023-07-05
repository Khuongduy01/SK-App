import { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Dialog,
  TextField,
  DialogActions,
  Button,
  Box,
  Typography,
  styled,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { setFormStatus } from "../redux/slice/appSlice";
import { REGISTER, LOG_IN } from "../constant/index";
import { loginUser } from "../redux/slice/userSlice";
import { postLogin, postRegister } from "../util/user";
import { useSnackbar } from "notistack";

function FormSignIn() {
  const formDataDF = {
    userName: "",
    gmail: "",
    password: "",
    retypePassword: "",
  };

  const validationDF = {
    toggle: false,
    message: {
      userName: "",
      gmail: "",
      password: "",
      retypePassword: "",
    },
  };
  const dialogForm = useSelector((state) => state.app.form);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(formDataDF);
  const { enqueueSnackbar } = useSnackbar();

  const [validation, setValidation] = useState(validationDF);

  const checkValidation = useCallback(
    (formData) => {
      const data = { ...formData };
      const err = {
        toggle: validation.toggle,
        message: {
          userName: "",
          gmail: "",
          password: "",
          retypePassword: "",
        },
      };

      if (!data.userName) {
        return (err.message.userName = "Bạn chưa nhập tên đăng nhập");
      } else if (data.userName.length < 6) {
        err.message.userName = "Tên đăng nhập lớn hơn 6 kí tự";
      } else if (data.userName.length > 18) {
        err.message.userName = "Tên đăng nhập nhỏ hơn 18 kí tự";
      } else {
        err.message.userName = "";
      }

      const gmailCheck =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line

      if (!data.gmail) {
        err.message.gmail = "Bạn chưa nhập gmail";
      } else if (!gmailCheck.test(data.gmail)) {
        err.message.gmail = "Gmail Không Hợp Lệ";
      } else {
        err.message.gmail = "";
      }

      if (!data.password) {
        err.message.password = "Bạn chưa nhập mật khẩu";
      } else if (data.password.length < 6) {
        err.message.password = "Mật khẩu lớn hơn 6 kí tự";
      } else if (data.password.length > 18) {
        err.message.password = "Mật khẩu nhỏ hơn 18 kí tự";
      } else {
        err.message.password = "";
      }

      if (!data.retypePassword) {
        err.message.retypePassword = "Bạn chưa nhập lại mật khẩu";
      } else if (data.retypePassword !== data.password) {
        err.message.retypePassword = "Mật khẩu nhập lại không trùng khớp";
      } else {
        err.message.retypePassword = "";
      }
      setValidation(err);
    },
    [validation.toggle]
  );

  useEffect(() => {
    checkValidation(formData);
  }, [checkValidation, formData]);

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    dispatch(setFormStatus(false));
    setFormData(formDataDF);
    setValidation(validationDF);
  };

  const handleSubmit = () => {
    setValidation({ ...validation, toggle: true });
    if (dialogForm.data === LOG_IN) {
      if (!validation.message.userName && !validation.message.password) {
        postLogin({
          userName: formData.userName,
          password: formData.password,
        }).then((res) => {
          if (res?.data) {
            dispatch(loginUser(res.data));
            handleClose();
            enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
          } else {
            enqueueSnackbar("Đăng nhập thất bại", { variant: "error" });
          }
        });
      }
    } else {
      if (
        !validation.message.userName &&
        !validation.message.password &&
        !validation.message.gmail &&
        !validation.message.retypePassword
      ) {
        postRegister({
          userName: formData.userName,
          password: formData.password,
          gmail: formData.gmail,
        }).then((res) => {
          if (res?.data) {
            dispatch(loginUser(res.data));
            handleClose();
            enqueueSnackbar("Đăng kí thành công", { variant: "success" });
          } else {
            enqueueSnackbar("Đăng kí thất bại", { variant: "error" });
          }
        });
      }
    }
  };

  const TitleForm = styled(Typography)({
    fontSize: "1.25rem",
    marginBottom: ".5rem",
    color: "#555",
    fontWeight: "700",
    textTransform: "uppercase",
  });

  const LabelForm = styled(Typography)({
    marginBottom: "1.4rem",
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

  if (formData)
    return (
      <Dialog
        open={dialogForm.status}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            width: {
              xs: "90%",
              sm: "466px",
            },
          },
        }}
      >
        <Box sx={{ padding: "30px" }} component={"form"}>
          <DialogTitle>
            <TitleForm>{dialogForm.data === REGISTER ? " Đăng kí" : "Đăng Nhập"}</TitleForm>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ mb: "1rem" }}>
              <LabelForm>Tên Tài Khoản *</LabelForm>
              <TextField
                type="text"
                fullWidth
                value={formData.username}
                name="userName"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <ErrorForm>{validation.toggle && validation.message.userName}</ErrorForm>
            </Box>

            {dialogForm.data === REGISTER && (
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Địa chỉ Email *</LabelForm>
                <TextField
                  type="email"
                  fullWidth
                  value={formData.gmail}
                  name="gmail"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                />
                <ErrorForm>{validation.toggle && validation.message.gmail}</ErrorForm>
              </Box>
            )}

            <Box sx={{ mb: "1rem" }}>
              <LabelForm>Mật Khẩu *</LabelForm>
              <TextField
                type="password"
                fullWidth
                autoComplete="on"
                value={formData.password}
                name="password"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <ErrorForm>{validation.toggle && validation.message.password}</ErrorForm>
            </Box>

            {dialogForm.data === REGISTER && (
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Nhập lại mật khẩu *</LabelForm>
                <TextField
                  type="password"
                  fullWidth
                  value={formData.retypePassword}
                  autoComplete="on"
                  name="retypePassword"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                />
                <ErrorForm>{validation.toggle && validation.message.retypePassword}</ErrorForm>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <BtnSubmitFrom onClick={handleSubmit}>
              {dialogForm.data === REGISTER ? " Đăng kí" : "Đăng Nhập"}
            </BtnSubmitFrom>
          </DialogActions>
        </Box>
      </Dialog>
    );
}

export default FormSignIn;
