import { configureStore } from '@reduxjs/toolkit';
import { testProductsReducer } from './testProductSlice';
import { productsReducer } from './productsSlice';
import loginSlice from './loginSlice';
import signupSlice from './signupSlice';
import tokenSlice from './tokenSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
	reducer: {
		login: loginSlice,
		signup: signupSlice,
		token: tokenSlice,
		products: productsReducer,
		testProducts: testProductsReducer,
		cart: cartReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
