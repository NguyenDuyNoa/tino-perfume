import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { loginFacebookActions } from "../../redux/slices/loginFacebook";
import { Navigate } from "react-router";

function LoginFacebook() {
  const { isLoggedIn } = useSelector((state) => state.loginFacebook);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    
    const userProfile = { name: res.data.name, picture: res.data.picture.data.url };
    dispatch(loginFacebookActions.login(userProfile));
    localStorage.setItem("token", res.data.accessToken);
  };

  const onError = () => {
    dispatch(loginFacebookActions.loginFail());
  };

  return (
    <div>
      <LoginSocialFacebook
        appId="856901915425856"
        onResolve={onSuccess}
        onReject={onError}
      >
        <FacebookLoginButton size="35px" text="Đăng nhập" iconSize="20px" />
      </LoginSocialFacebook>
      {isLoggedIn && <Navigate to='/' />}
    </div>
  );
}

export default LoginFacebook;
