import { createSlice } from "@reduxjs/toolkit";

const loginGoogleState = {
    isLoggedIn : false,
    error : false,
    credentials : {
        name : '',
        picture : ''
    }
}
const randomId= () => {
    const firstChar = 'G'
    const id = Math.floor(Math.random()*9999)
    return firstChar + id
}

const loginGoogleSlice = createSlice({
    name : 'loginGoogle',
    initialState : loginGoogleState,
    reducers : {
        login(state,action){
            state.isLoggedIn = true;
            state.credentials.name = action.payload.name;
            state.credentials.picture = action.payload.picture;
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
        loginFail (state) {
            state.error = true;
            state.isLoggedIn = false;
        }
    }
})

export const loginGoogleActions = loginGoogleSlice.actions;
export default loginGoogleSlice.reducer;
