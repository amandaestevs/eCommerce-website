import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotal: 0,
    isCartOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex === -1){
               state.cartItems.push(action.payload)
            } else {
               state.cartItems[itemIndex].quantity += 1;
            }
            state.isCartOpen = true;
        },
        removeItem: (state, action) => {
           const newCart = state.cartItems.filter((item) => item.id !== action.payload.id)
           state.cartItems = newCart;
        },
        increaseQuantity: (state, action) => {
           const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
           state.cartItems[itemIndex].quantity += 1;
        },
        decreaseQuantity: (state, action) => {
           const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
           
           if(state.cartItems[itemIndex].quantity > 1) {
               state.cartItems[itemIndex].quantity -= 1;
           } else if (state.cartItems[itemIndex].quantity === 1){
            const newCart = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = newCart;
           }
        },
        calculateTotal: (state) => {
            const total = state.cartItems.reduce((cartTotal, item) => {
                const {price, quantity} = item;
                const itemTotal = parseFloat(price * quantity);
                cartTotal += itemTotal;
                return cartTotal
            }, 0)
            state.cartTotal = total.toFixed(2);
        },
        handleCart: (state, action) => {
            if(action.payload.type === 'open'){
                state.isCartOpen = true;
            } else if (action.payload.type === 'close'){
                state.isCartOpen = false;
            }
        },
        clear: (state) => {
            state.cartItems.splice(0, state.cartItems.length)
        }
    }
})

export const { addProduct, removeItem, increaseQuantity, decreaseQuantity, calculateTotal, handleCart, clear } = cartSlice.actions;
export default cartSlice.reducer;