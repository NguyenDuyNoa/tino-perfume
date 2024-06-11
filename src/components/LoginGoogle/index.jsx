import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogleActions } from "../../redux/slices/loginGoogleSlice";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router";

function GoogleLoginButton() {
  const {isLoggedIn} = useSelector(state => state.loginGoogle);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const decode = jwtDecode(res.credential);
    const newUser = {name : decode.name , picture : decode.picture , email : decode.email}
    dispatch(loginGoogleActions.login(newUser));
    localStorage.setItem('token', res.credential);
  };

  const onError = () => {
    dispatch(loginGoogleActions.loginFail());
  };
  return (
    <div>
      <GoogleLogin
        text="signin"
        theme="outline"
        onError={onError}
        onSuccess={onSuccess}
      />
      {isLoggedIn && <Navigate to='/' />}
    </div>
  );
}

export default GoogleLoginButton;
