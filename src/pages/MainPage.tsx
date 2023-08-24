<<<<<<< HEAD
import React from 'react';

const MainPage = () => {
	return <div>메인 페이지</div>;
=======
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
}
const MainPage = () => {
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
>>>>>>> devMain
};

export default MainPage;
