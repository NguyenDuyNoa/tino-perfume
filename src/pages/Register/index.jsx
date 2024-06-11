import React from "react";
import TextFields from "../../components/TextField";
import TextFieldPassword from "../../components/TextField/text-field-password";
import LayoutRegisLogin from "../../components/LayoutRegisLogin";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/slices/registerSlice";

const Register = () => {
  const { isSuccess } = useSelector(
    (state) => state.register
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    onSubmit: (values) => {
      dispatch(
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
    },
  });

  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  return (
    <LayoutRegisLogin name="Đăng ký">
      <form
        className="flex items-center mt-10"
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => onEnter(e)}
      >
        {/* <div className="bg-white rounded-lg w-[520px] h-[520px]"> */}
        <div className="bg-white rounded-lg xl:w-[450px] xl:h-[500px] w-[350px]">

          <p className="flex justify-center mt-3 font-semibold text-2xl ">
            Tạo Tài Khoản
          </p>
          <div className="flex flex-col items-center gap-y-2">
              <TextFields
                label="Họ Và Tên"
                // width="450px"
                value={formik.values.fullName}
                onChange={formik.handleChange("fullName")}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
                required={true}
              />
              <TextFields
                label="Tên đăng nhập"
                // width="450px"
                value={formik.values.userName}
                onChange={formik.handleChange("userName")}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
                required={true}
              />
              <TextFields
                label="Email"
                // width="450px"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                required={true}
              />
              <TextFieldPassword
                label="Mật Khẩu"
                // width="450px"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                required={true}
              />
              <TextFieldPassword
                label="Xác Nhận Mật Khẩu"
                // width="450px"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange("confirmPassword")}
                error={
                  formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)
                }
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                required={true}
              />
              <button
                type="submit"
                className="uppercase xl:w-[400px] w-[300px] h-10 mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md"
              >
                Đăng Ký
              </button>
          </div>
          <p className=" text-gray-400 pt-2 pb-8 pb text-center text-sm">
            Bạn đã có tài khoản?
            <Link to="/login" className="ml-3 text-red-600">
              Đăng nhập
            </Link>
          </p>
        </div>
      </form>
      {isSuccess && navigate("/login")}
    </LayoutRegisLogin>
  );
};

export default Register;
