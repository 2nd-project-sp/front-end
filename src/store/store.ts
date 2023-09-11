import { configureStore } from '@reduxjs/toolkit';
import { testProductsReducer } from './testProductSlice';
import loginSlice from './loginSlice';
import signupSlice from './signupSlice';
import tokenSlice from './tokenSlice';
import cartSlice from './cartSlice';
import manageSlice from './manageSlice';

export const store = configureStore({
	reducer: {
		login: loginSlice,
		signup: signupSlice,
		token: tokenSlice,
		testProducts: testProductsReducer,
		cart: cartSlice,
		manage: manageSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
