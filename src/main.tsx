import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { LoginPage, MainPage, MyBagPage, MyPage } from './pages/index';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
				path: 'product/:id', // 디테일 페이지 라우팅
				element: <ProductDetail />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
