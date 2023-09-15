import { createSlice, PayloadAction } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { CustomProductInterface } from '../pages/ProductMarket';
=======
import { ProductLists } from '../models/product';
>>>>>>> c50928afbd2ca8b1554daff5b2b20da2c0db7bd3

const initialState: CustomProductInterface[] = [];

export interface RootState {
	manage: CustomProductInterface[];
}

const manageSlice = createSlice({
	name: 'manage',
	initialState,
	reducers: {
<<<<<<< HEAD
		addToManage: (state, action: PayloadAction<CustomProductInterface>) => {
			state.push(action.payload);
=======
		addToManage: (state, action) => {
			state.products.push(action.payload);
>>>>>>> c50928afbd2ca8b1554daff5b2b20da2c0db7bd3
		},
		updateQuantity: (state, action: PayloadAction<{ productId: number; newQuantity: number }>) => {
			const { productId, newQuantity } = action.payload;
			const product = state.find(p => p.id === productId);
			if (product) {
				product.quantity = newQuantity;
			}
		},
	},
});

export const { addToManage, updateQuantity } = manageSlice.actions;

export default manageSlice.reducer;
