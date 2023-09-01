import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
	data: [],
};

// Create a products slice
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		// Reducer for storing fetched data
		setProductsData: (state, action) => {
			state.data = action.payload;
		},
	},
});

// Export the reducer
export const { reducer: productsReducer } = productsSlice;

// Export the action creator
export const { setProductsData } = productsSlice.actions;

// Define a function to fetch products (Thunk removed)
export const fetchProducts = () => async dispatch => {
	try {
		// Fetch data from the API
		const response = await fetch('https://dummyjson.com/products');
		const data = await response.json();

		// Update the state with the fetched data
		dispatch(setProductsData(data));
	} catch (error) {
		// You can handle errors here if needed
		console.error('Error fetching products:', error);
	}
};

// Selector to get product data
export const selectProductData = state => state.products.data;

export default productsReducer;
