import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css';
import './components/ProductDesc/ProductDesc.css';
import './pages/DetailPage/ProductDetail.css';
import './components/ProductReview/ProductReview.css';
import './components/ProductCount/ProductCount.css';

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
