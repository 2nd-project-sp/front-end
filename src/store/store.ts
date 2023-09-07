import { configureStore } from '@reduxjs/toolkit';
import { testProductsReducer } from './testProductSlice';
import { productsReducer } from './productsSlice';
import loginSlice from './loginSlice';
import signupSlice from './signupSlice';
import tokenSlice from './tokenSlice';
import userSlice from './userSlice';

export const store = configureStore({
	reducer: {
		login: loginSlice,
		signup: signupSlice,
		token: tokenSlice,
		saveUser: userSlice,
		products: productsReducer,
		testProducts: testProductsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
