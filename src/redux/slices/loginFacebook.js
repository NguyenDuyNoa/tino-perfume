import { createSlice } from '@reduxjs/toolkit';

const initialLoginFacebookState = {
    isLoggedIn: false,
    credentialsFb: {
        name: '',
        picture: ''
    },
    error: false
};

const randomId= () => {
    const firstChar = 'F'
    const id = Math.floor(Math.random()*9999)
    return firstChar + id
}

const loginFacebookSlice = createSlice({
    name: 'loginFacebook',
    initialState: initialLoginFacebookState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.credentialsFb.name = action.payload.name;
            state.credentialsFb.picture = action.payload.picture;
            state.error = false;
            localStorage.setItem("userInfor", JSON.stringify(
                {
                    id : randomId(),
                    fullName : action.payload.name,
                    avatar : action.payload.picture,
                    isAdmin : false,
                    email : action.payload.email,
                    carts : []
                }
            ))
        },
        loginFail(state) {
            state.error = true;
            state.isLoggedIn = false;
        }
    }
});

export const loginFacebookActions = loginFacebookSlice.actions;

export default loginFacebookSlice.reducer;