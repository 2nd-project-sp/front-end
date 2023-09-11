<<<<<<< HEAD
<<<<<<< Updated upstream
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
=======
=======
>>>>>>> ca2d2ac57888d3822de41fe2bcbb25cd0cd6a6ea
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
import {
	LoginPage,
	MainPage,
	MyBagPage,
	MyPage,
	PaymentPage,
	SignUpPage,
	ProductDetail,
<<<<<<< HEAD
	ProductMarket,
=======
	ProductInput
>>>>>>> ca2d2ac57888d3822de41fe2bcbb25cd0cd6a6ea
} from './pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
<<<<<<< HEAD
=======
import ShippingPage from './pages/ShippingPage';
>>>>>>> ca2d2ac57888d3822de41fe2bcbb25cd0cd6a6ea

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'mybag',
				element: <MyBagPage />,
			},
			{
				path: 'my',
				element: <MyPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'PaymentPage',
				element: <PaymentPage products={[]} />,
			},
			{
				path: 'product/:id', // 디테일 페이지 라우팅
				element: <ProductDetail />,
			},
<<<<<<< HEAD
			{ path: 'myproduct', element: <ProductMarket /> },
=======
			{
				path: 'ShippingPage', // 디테일 페이지 라우팅
				element: <ShippingPage />,
			},


>>>>>>> ca2d2ac57888d3822de41fe2bcbb25cd0cd6a6ea
			{ path: 'signup', element: <SignUpPage /> },
		],
	},
]);
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> ca2d2ac57888d3822de41fe2bcbb25cd0cd6a6ea

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</QueryClientProvider>
);
