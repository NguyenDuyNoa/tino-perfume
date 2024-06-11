import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextFieldPassword from "../../../components/TextField/text-field-password";
import TextFields from "../../../components/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/slices/registerSlice";
import { getListUser } from "../../../redux/slices/userSlice";

const CreateEditUser = ({
  isShow = false,
  width = "550px",
  height = "600px",
  onClose,
}) => {
  const [open, setOpen] = useState(isShow);
  const dispatch = useDispatch();

  const modalConfirmStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: "21px",
    pl: "32px",
  };

  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  const renderId = () => {
    return Math.floor(Math.random() * 9999);
  };
  const validationSchema = yup.object({
    fullName: yup.string().required("Chưa nhập Họ và tên"),
    userName: yup.string().required("Chưa nhập Tên đăng nhập"),
    email: yup
      .string()
      .required("Chưa nhập Email")
      .email("Chưa đúng định dạng email"),
    password: yup
      .string()
      .required("Chưa nhập Password")
      .min(8, "Mật khẩu tối thiểu 8 ký tự"),
    confirmPassword: yup
      .string()
      .required("Chưa nhập xác nhận mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await dispatch(
         register({
          id: renderId(),
          userName: values.userName,
          password: values.password,
          isAdmin: false,
          fullName: values.fullName,
          email: values.email,
          avatar: "",
          cart: [],
        })
      );
      dispatch(getListUser());
      onClose();
    },
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalConfirmStyle} width={width} height={height}>
        <form onSubmit={formik.handleSubmit}>
          <p className="text-2xl font-semibold text-center my-5">
            Tạo mới người dùng
          </p>
          <div className="flex flex-col items-center gap-y-2">
            <TextFields
              label="Họ Và Tên"
              width="450px"
              value={formik.values.fullName}
              onChange={formik.handleChange("fullName")}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              required={true}
            />
            <TextFields
              label="Tên đăng nhập"
              width="450px"
              value={formik.values.userName}
              onChange={formik.handleChange("userName")}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              required={true}
            />
            <TextFields
              label="Email"
              width="450px"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              required={true}
            />
            <TextFieldPassword
              label="Mật Khẩu"
              width="450px"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required={true}
            />
            <TextFieldPassword
              label="Xác Nhận Mật Khẩu"
              width="450px"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange("confirmPassword")}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              required={true}
            />
            <button
              type="submit"
              className="uppercase w-[450px] h-10 mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md"
            >
              Đăng Ký
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateEditUser;
