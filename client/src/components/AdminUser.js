import { useState, useEffect } from "react";
import { TableContainer, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getAllUsers, deleteUser } from "../util/user";
import { useSnackbar } from "notistack";
import PopoverBase from "./PopoverBase";

function AdminUser() {
  const [userLists, setUserLists] = useState([]);
  const [user, setUser] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUserLists(res.data);
    });
  }, []);

  const handleDeleteUser = () => {
    try {
      if (user?.userId) {
        deleteUser(user.userId).then((res) => {
          if (res?.message) {
            setUser({});
            setUserLists(userLists.filter((item) => item.userId !== user.userId));
            enqueueSnackbar(res.message, { variant: "success" });
          }
        });
      }
    } catch (error) {
      enqueueSnackbar("Có Lỗi Xảy Ra", "error");
    }
  };

  const columns = [
    { field: "userId", headerName: "ID", minWidth: 150 },
    { field: "userName", headerName: "userName", minWidth: 150 },
    { field: "phone", headerName: "phone", minWidth: 150 },
    {
      field: "address",
      headerName: "address",
      minWidth: 150,
    },
    {
      field: "password",
      headerName: "password",
      minWidth: 150,
    },
    {
      field: "prefer",
      headerName: "prefer",
      minWidth: 150,
    },
    {
      field: "category",
      headerName: "category",
      minWidth: 150,
    },
    {
      field: "order",
      headerName: "order",
      minWidth: 150,
    },
  ];

  return (
    <Stack>
      <TableContainer>
        <DataGrid
          getRowId={(row) => row.userId}
          rows={userLists}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          onCellClick={(sell) => {
            setUser(sell.row);
          }}
        />
      </TableContainer>
      <Stack gap={2} direction={"row"} sx={{ marginLeft: "auto", position: "relative" }}>
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
            if (user?.userId) setPopoverAnchorEl(e.currentTarget);
          }}
        >
          Xóa Tài Khoản
        </Button>
        <PopoverBase
          open={Boolean(popoverAnchorEl)}
          handleClose={() => {
            setPopoverAnchorEl(null);
          }}
          anchorEl={popoverAnchorEl}
          message={`Bạn có muốn xóa tài khoản ID : ${user?.userId} ?`}
          okV={"Xoá"}
          cancelV={"Hủy"}
          handleClickOk={handleDeleteUser}
        ></PopoverBase>
      </Stack>
    </Stack>
  );
}

export default AdminUser;
