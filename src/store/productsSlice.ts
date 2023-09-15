import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 초기값
const initialState = {
	data: [],
};
interface Product {
	brand: string;
	deliveryPrice: number;
	description: string;
	discountRate: number;
	imageType: string;
	imageUrl: string;
	isDiscount: boolean;
	isNew: boolean;
	name: string;
	optionList: any[];
	price: number;
	saleEndDate: string;
	saleStartDate: string;
}

interface ProductsState {
	products: any;
	data: Product | null;
	message: string;
	status: string;
}

export type { ProductsState };

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

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await fetch('http://15.164.128.162:8080/api/v1/products/1');

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
});

export const selectProductData = (state: { products: ProductsState }) => state.products.data;
export default productsReducer;
