import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout/imdex";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell } from "../../../styles/styled-table";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getListUser, userActions } from "../../../redux/slices/userSlice";
import UserTR from "./UserTR";
import Loader from "../../../components/Loader/Loader";
import CreateEditUser from "./create-edit-modal";
import Notification from "../../../components/Alert";
import { registerActions } from "../../../redux/slices/registerSlice";

const UserManagement = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { isLoading, userList } = useSelector((state) => state.user);
  const { isSuccess, registerMessage } = useSelector((state) => state.register);
  const { isSuccessUser, messageUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleCloseModal = () => {
    setIsCreate(false);
  };

  const handleDelete = async (item) => {
    await dispatch(deleteUser(item.id));
    dispatch(getListUser());
  };

  const handleRegisterDestroyErr = () => {
    dispatch(registerActions.destroyerror());
  };

  const handleUserDestroyErr = () => {
    dispatch(userActions.destroyerror());
  };

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  return (
    <AdminLayout>
      <div className="flex justify-between">
        <p className="uppercase font-semibold">Quản trị người dùng</p>
        <button
          onClick={handleCreate}
          className="uppercase w-24 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm rounded"
        >
          Tạo mới
        </button>
      </div>
      <div className="mt-4">
        <TableContainer
          className="overflow-y-scroll"
          sx={{ maxHeight: 665 }}
          component={Paper}
        >
          <Table sx={{ minWidth: 700 }} size="small">
            <TableHead sx={{ textTransform: "uppercase" }}>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Tên đăng nhập</StyledTableCell>
                <StyledTableCell align="center">Họ và tên</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Phân Quyền</StyledTableCell>
                <StyledTableCell align="center">Chức năng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading &&
                userList.length > 0 &&
                userList.map((item, index) => (
                  <UserTR
                    item={item}
                    key={index}
                    handleDelete={() => handleDelete(item)}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                ))}
            </TableBody>
          </Table>
          {isLoading && (
            <div className="w-full h-615 flex justify-center items-center">
              <Loader />
            </div>
          )}
          {!isLoading && userList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không tìm thấy dữ liệu.
            </div>
          )}
        </TableContainer>
      </div>
      {isCreate && (
        <CreateEditUser isShow={isCreate} onClose={handleCloseModal} />
      )}
      {isSuccess && (
        <Notification
          show={isSuccess}
          message={registerMessage}
          type={"success"}
          handleDestroyErr={handleRegisterDestroyErr}
        />
      )}
      {isSuccessUser && (
        <Notification
          show={isSuccessUser}
          message={messageUser}
          type={"success"}
          handleDestroyErr={handleUserDestroyErr}
        />
      )}
    </AdminLayout>
  );
};

export default UserManagement;
