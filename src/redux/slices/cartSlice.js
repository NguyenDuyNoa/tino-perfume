import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            isLoading: false,
            cart: [],
            isError: false,
            isSuccess: false,
            cartMessage: ''
        },
        reducers: {
            addToCart(state, action) {
                let index = state.cart.findIndex(item => item.productId === action.payload.productId);
                if (index !== -1) {
                    state.cart[index].quantity += action.payload.quantity;
                } else {
                    state.cart.push(action.payload)
                }
                state.cart = [...state.cart];
                state.isSuccess = true;
                state.cartMessage = 'Thêm sản phẩm thành công';
            },
            removeCart(state, action) {
                let index = state.cart.findIndex(item => item.productId === action.payload.productId);
                if (index !== -1) {
                    state.cart.splice(index, 1);
                }
                state.cart = [...state.cart];
            },
            destroyerror: state => {
                state.isSuccess = false;
                state.cartMessage = '';
            },
            increment(state, action) {
                let index = state.cart.findIndex(item => item.productId === action.payload.productId);
                if (index !== -1) {
                    state.cart[index].quantity += 1
                }
                state.cart = [...state.cart];
            },
            decrement(state, action) {
                let index = state.cart.findIndex(item => item.productId === action.payload.productId);
                if (index !== -1) {
                    state.cart[index].quantity -= 1
                }
                state.cart = [...state.cart];
            },
        },
    }
)

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;