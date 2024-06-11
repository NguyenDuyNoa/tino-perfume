import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
import api from "../../services/api";

export const login = createAsyncThunk("login", async (inforLogin) => {
  let res = await api.user.findAllUser();
  return {
    users: res.data,
    inforLogin: inforLogin,
  };
});

export const checkTokenLocal = createAsyncThunk("checkTokenLocal", async (token) => {
  let res = await api.user.findAllUser();
  return {
    users: res.data,
    token: token,
  };
});

function createToken(userObj, privateKey) {
  return CryptoJS.AES.encrypt(JSON.stringify(userObj), privateKey).toString();
}

function checkToken(token, privateKey, keyEnv) {
  try {
    if (privateKey !== keyEnv) {
      return false;
    }
    //giai ma
    const decryptedData = CryptoJS.AES.decrypt(token, privateKey).toString(
      CryptoJS.enc.Utf8
    );
    return JSON.parse(decryptedData);
  } catch {
    return false;
  }
}

const userLoginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    userInfor: null,
    isError : false,
    message : ''
  },
  reducers: {
    destroyerror: state => {
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) =>{
      state.isLoading = true;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      let user = action.payload.users.find(
        (user) => user.userName === action.payload.inforLogin.userName && user.password === action.payload.inforLogin.password
      );

      if (!user) {
        state.isError = true;
        state.message = 'Tài khoản hoặc mật khẩu không đúng';
      } else {
        state.userInfor = user; 
        //ma hoa du lieu
        let token = createToken(user, 'keycheck')
        //luu token trong local storage
        localStorage.setItem("token", token)
        localStorage.setItem("userInfor", JSON.stringify(user) )
      }
    });
    builder.addCase(login.rejected, (state) =>{
      state.isLoading = false;
      state.isError = true;
      state.message = 'Đăng nhập thất bại';
    });
    builder.addCase(checkTokenLocal.fulfilled, (state, action) => {
      let deToken = checkToken(
        action.payload.token,
        'keycheck',
        'keycheck'
      );
      let user = action.payload.users.find(
        (user) => user.userName === deToken.userName
      );
      if (deToken) {
        if (user) {
          if (user.password === deToken.password) {
            state.userInfor = user;
          } else {
            localStorage.removeItem("token");
          }
        } else {
          localStorage.removeItem("token");
        }
      } else {
        localStorage.removeItem("token")
      }
    });
  },
});

export const userLoginActions = userLoginSlice.actions;

export default userLoginSlice.reducer;