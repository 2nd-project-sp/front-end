import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomProductInterface } from '../pages/ProductMarket';

const initialState: CustomProductInterface[] = [];

export interface RootState {
	manage: CustomProductInterface[];
}

const manageSlice = createSlice({
	name: 'manage',
	initialState,
	reducers: {
		addToManage: (state, action: PayloadAction<CustomProductInterface>) => {
			state.push(action.payload);
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
