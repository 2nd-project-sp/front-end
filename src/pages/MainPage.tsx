import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { ProductLists } from '../models/product';

const MainPage: React.FC = () => {
	const [products, setProducts] = useState<ProductLists>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchProducts = async () => {
			try {
				const response = await fetch('https://dummyjson.com/products');
				const data = await response.json();
				setProducts(data?.products);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);
	return (
		<>
			{loading && 'Loading...'}
			<ProductList products={products} />
		</>
	);
};

export default MainPage;
