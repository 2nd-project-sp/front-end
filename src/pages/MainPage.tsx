import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
}
const MainPage: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products');
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);
	return (
		<>
			<ProductList products={products} />
		</>
	);
};

export default MainPage;
