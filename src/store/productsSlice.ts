import { createSlice } from '@reduxjs/toolkit';

// 초기값
const initialState = {
	data: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProductsData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { reducer: productsReducer, actions } = productsSlice;
export const { setProductsData } = actions;

export const fetchProducts = () => async dispatch => {
	try {
		const response = await fetch('http://15.164.128.162:8080/api/v1/products/1');

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		dispatch(setProductsData(data));
	} catch (error) {
		console.error('Error fetching products:', error);
	}
};

export const selectProductData = state => state.products.data;

export default productsReducer;
