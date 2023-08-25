import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css';
import './components/ProductDesc/ProductDesc.css';
import './components/ProductDetail/ProductDetail.css';
import './components/ProductReview/ProductReview.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
