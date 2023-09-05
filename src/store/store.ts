import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import { testProductsReducer } from './testProductSlice';
import { productsReducer } from './productsSlice';

export const store = configureStore({
	reducer: {
		login: loginSlice,
		products: productsReducer,
		testProducts: testProductsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
