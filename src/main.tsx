import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import { LoginPage, MainPage, MyBagPage, MyPage, SignUpPage } from './pages/index.ts';
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
				path: 'signup',
				element: <SignUpPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
