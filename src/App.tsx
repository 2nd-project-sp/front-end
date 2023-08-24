import './App.css';
import './components/ProductDetail/ProductDetail.css';
import './components/ProductDesc/ProductDesc.css';
import './components/ProductReview/ProductReview.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { useEffect, useState } from 'react';

function App() {
	const [productData, setProductData] = useState<any>(null);

	// API불러옴
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setProductData(json));
	}, []);

	return <>{productData && <ProductDetail productData={productData} />}</>;
}

export default App;
