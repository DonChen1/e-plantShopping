import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === "Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
