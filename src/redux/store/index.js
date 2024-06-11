
import { configureStore } from '@reduxjs/toolkit'
import userLoginReducer from '../slices/loginSlice.js'
import loginFacebookReducer from '../slices/loginFacebook.js'
import loginGoogleReducer from '../slices/loginGoogleSlice.js'
import registerReducer from '../slices/registerSlice.js'
import productReducer from '../slices/productSlice.js'
import cartReducer from '../slices/cartSlice.js'
import userReducer from '../slices/userSlice.js'

const store = configureStore({
    reducer: {
        userLoginStore: userLoginReducer,
        loginFacebook : loginFacebookReducer,
        loginGoogle : loginGoogleReducer,
        register : registerReducer,
        product : productReducer,
        cart : cartReducer,
        user : userReducer
    }
})
export default store