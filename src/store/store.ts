import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import signupSlice from './signupSlice';
import { productsReducer } from './productsSlice';

export const store = configureStore({
	reducer: {
		login: loginSlice,
		signup: signupSlice,
		products: productsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
