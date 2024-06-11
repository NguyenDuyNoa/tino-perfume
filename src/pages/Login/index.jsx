import React from "react";
import LayoutRegisLogin from "../../components/LayoutRegisLogin";
import TextFieldPassword from "../../components/TextField/text-field-password";
import { Divider } from "@mui/material";
import TextFields from "../../components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  login,
  userLoginActions,
} from "../../redux/slices/loginSlice";
import * as yup from "yup";
import { useFormik } from "formik";
import ActionAlerts from "../../components/Alert/alert";
import GoogleLoginButton from "../../components/LoginGoogle";
import LoginFacebook from "../../components/LoginFacebook";
import { registerActions } from "../../redux/slices/registerSlice";
import Notification from "../../components/Alert";

const Login = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector(
    (state) => state.userLoginStore
  );
  const { isSuccess, registerMessage } = useSelector((state) => state.register);

  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";

  const handleDestroyErr = () => {
    dispatch(userLoginActions.destroyerror());
  };

  const handleRegisterDestroyErr = () => {
    dispatch(registerActions.destroyerror());
  };

  const validationSchema = yup.object({
    userName: yup.string().required("Chưa nhập Tên đăng nhập"),
    password: yup.string().required("Chưa nhập Password"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          userName: values.userName,
          password: values.password,
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
    <LayoutRegisLogin name="Đăng nhập">
      <form
        className="flex items-center mt-10 "
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => onEnter(e)}
      >
        <div className="bg-white rounded-md xl:w-[450px] xl:h-[450px] w-[350px]">
          <p className="flex justify-center mt-5 font-semibold text-2xl ">
            Đăng nhập
          </p>
          <div className="flex justify-center">
            <div>
              <div>
                <TextFields
                  label="Tên đăng nhập"
                  type="text"
                  value={formik.values.userName}
                  onChange={formik.handleChange("userName")}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                  formName="loginForm"
                  required={true}
                />
                <TextFieldPassword
                  required={true}
                  label="Mật Khẩu"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  formName="loginForm"
                />
              </div>
              <div className="flex justify-center relative mt-5">
                <button
                  type="submit"
                  className=" uppercase w-[300px] lg:w-[400px] h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md"
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="absolute text-blue-700 my-2">
                <a href="#!" className="text-xs transition duration-150">
                  Quên mật khẩu
                </a>
              </div>
              <Divider sx={{ marginTop: "16px" }}>Hoặc</Divider>
              <div className="flex justify-around mt-4">
                <button className="flex justify-around">
                  <LoginFacebook />
                </button>
                <button className="flex justify-around">
                  <GoogleLoginButton width={150} />
                </button>
              </div>
              <p className=" text-gray-400 pt-2 pb-8 pb text-center text-sm">
                Bạn mới biết đến TinoPerfume?
                <Link to="/register" className="text-red-600">
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
      {isError && (
        <ActionAlerts
          error={isError}
          isLoggedIn={token !== ""}
          type={"error"}
          message={message}
          handleDestroyErr={handleDestroyErr}
          widthSize="500px"
        />
      )}
      {isSuccess && (
        <Notification
          show={isSuccess}
          message={registerMessage}
          type={"success"}
          handleDestroyErr={handleRegisterDestroyErr}
        />
      )}
      {token && navigate("/")}
    </LayoutRegisLogin>
  );
};

export default Login;
