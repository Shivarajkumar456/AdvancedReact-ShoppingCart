import { createSlice } from "@reduxjs/toolkit";

const initialState = {showCart: false}

const cartSlice = createSlice({
    name:'ShowCart',
    initialState,
    reducers: {
        cart(state) {
            state.showCart = !state.showCart
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;