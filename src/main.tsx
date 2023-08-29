import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { LoginPage, MainPage, MyBagPage, MyPage, SignUpPage } from './pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductDetail from './pages/DetailPage/ProductDetail';

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
			{ path: 'signup', element: <SignUpPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
