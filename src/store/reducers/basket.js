import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({

  name: 'basket',
  initialState: {
    basket: [],
    count: 0,
    priceProducts: 0,
  },
  reducers: {
    addProduct (state, action) {
      state.basket.push(action.payload);
      // console.log(action.payload)

      state.count = state.basket.reduce((sum) => {
        return sum += 1
      }, 0);

      state.priceProducts = state.basket.reduce((sum, current) => {
        return sum + +current.price
      }, 0);
    },
    deleteProduct (state, action) {
      state.basket = state.basket.filter (
        (item) => item.id !== action.payload.id
      );

      state.count = state.basket.reduce((sum) => {
        return sum += 1
      }, 0);
      
      state.priceProducts = state.basket.reduce((sum, current) => {
        return sum + +current.price
      }, 0);
    },
    clearProducts (state) {
      state.basket = [];
      state.count = 0;
      state.priceProducts = 0;
    },
  }
})

export const { addProduct } = basketSlice.actions;
export const { deleteProduct } = basketSlice.actions;
export const { clearProducts } = basketSlice.actions;

export default basketSlice.reducer;