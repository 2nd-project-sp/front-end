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
		updateQuantity: (state, action: PayloadAction<{ name: string; newQuantity: number }>) => {
			const { name, newQuantity } = action.payload;
			const product = state.find(p => p.name === name);
			if (product) {
				product.stock = newQuantity;
			}
		},
	},
});

export const { addToManage, updateQuantity } = manageSlice.actions;

export default manageSlice.reducer;
