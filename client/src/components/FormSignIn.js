import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, TextField, DialogActions, Button, Box } from "@mui/material";
import { setFormStatus } from "../redux/slice/appSlice";
import { LOG_IN, REGISTER } from "../constant/FormSignInData";

function FormSignIn() {
  const dataForm = useSelector((state) => state.app.form);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setFormStatus(false));
  };
  return (
    <Dialog open={dataForm.status} onClose={handleClose}>
      <Box sx={{ padding: "16px" }}>
        {dataForm.data === LOG_IN && (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            Log In
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </>
        )}
        {dataForm.data === REGISTER && (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            REGISTER
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </>
        )}
      </Box>
    </Dialog>
  );
}

export default FormSignIn;
