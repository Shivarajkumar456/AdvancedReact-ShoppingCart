import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
        totalQty: 0
    },
    reducers: {
        addItemtoCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item=> item.id===newItem.id);
            state.totalQty++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            }else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price; 
            }
        },
        removeItemfromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.filter(item=>item.id===id);
            state.totalQty--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item=>item.id!==id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;