import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'testProducts',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.testProducts;
export const testProductsReducer = productsSlice.reducer;