import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { LoginPage, MainPage, MyBagPage, MyPage,PaymentPage } from './pages/index';
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
				path: 'PaymentPage',
				element: <PaymentPage products={[]} />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
