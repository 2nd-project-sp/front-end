import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import { productsReducer } from './productsSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
	reducer: {
		login: loginSlice,
		products: productsReducer,
		cart: cartReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;