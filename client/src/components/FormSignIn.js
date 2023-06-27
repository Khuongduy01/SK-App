import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
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
import { LOG_IN, REGISTER } from "../constant/FormSignInData";

function FormSignIn() {
  const formDataDF = {
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  };
  const [, forceUpdate] = useState();
  const dataForm = useSelector((state) => state.app.form);
  const dispatch = useDispatch();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Trường này là bắt buộc",
        email: "Email sai",
        min: "tối thiểu 6 kí tự",
        max: "tối đa 12 kí tự",
      },
      autoForceUpdate: { forceUpdate: forceUpdate },
    })
  );
  const [formData, setFormData] = useState(formDataDF);

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    dispatch(setFormStatus(false));
    setFormData(formDataDF);
    validator.current.hideMessages();
  };

  const handleLogIn = () => {
    const emailValid = validator.current.fieldValid("email");
    const password = validator.current.fieldValid("password");
    validator.current.showMessages();

    if (emailValid & password) {
      console.log("HandleLogin");
      handleClose();
    }
  };

  const handleRegister = () => {
    const formValid = validator.current.allValid();
    validator.current.showMessages();
    if (formValid) {
      console.log("handleRegister");
      handleClose();
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

  return (
    <Dialog
      open={dataForm.status}
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
        {dataForm.data === LOG_IN && (
          <>
            <DialogTitle>
              <TitleForm>Đăng Nhập</TitleForm>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Địa chỉ Email *</LabelForm>
                <TextField
                  type="email"
                  fullWidth
                  value={formData.email}
                  name="email"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                />
                <ErrorForm>{validator.current.message("email", formData.email, "required|email")}</ErrorForm>
              </Box>
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
                <ErrorForm>
                  {validator.current.message("password", formData.password, "required|min:6|max:12")}
                </ErrorForm>
              </Box>
            </DialogContent>
            <DialogActions>
              <BtnSubmitFrom onClick={handleLogIn}>Đăng Nhập</BtnSubmitFrom>
            </DialogActions>
          </>
        )}
        {dataForm.data === REGISTER && (
          <>
            <DialogTitle>
              <TitleForm>Đăng kí</TitleForm>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Họ Tên *</LabelForm>
                <TextField
                  type="text"
                  fullWidth
                  value={formData.username}
                  name="username"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                />
                <ErrorForm>
                  {validator.current.message("username", formData.username, "required|min:6|max:12")}
                </ErrorForm>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <LabelForm>Địa chỉ Email *</LabelForm>
                <TextField
                  type="email"
                  fullWidth
                  value={formData.email}
                  name="email"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                />
                <ErrorForm>{validator.current.message("email", formData.email, "required|email")}</ErrorForm>
              </Box>
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
                <ErrorForm>
                  {validator.current.message("password", formData.password, "required|min:6|max:12")}
                </ErrorForm>
              </Box>
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
                <ErrorForm>
                  {validator.current.message("retypePassword", formData.retypePassword, "required|min:6|max:12")}
                </ErrorForm>
              </Box>
            </DialogContent>
            <DialogActions></DialogActions>
            <DialogActions>
              <BtnSubmitFrom onClick={handleRegister}>Đăng kí</BtnSubmitFrom>
            </DialogActions>
          </>
        )}
      </Box>
    </Dialog>
  );
}

export default FormSignIn;
