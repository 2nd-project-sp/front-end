import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import { LoginPage, MainPage, MyBagPage, MyPage } from './pages/index.ts';
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
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
