import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar';
import { ProductLists } from '../models/Product';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
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
			<PageContainer>
				{loading && 'Loading...'}
				<SidebarContainer>
					<Sidebar />
				</SidebarContainer>
				<ProductListContainer>
					<ProductList products={products} />
				</ProductListContainer>
			</PageContainer>
		</>
	);
};

const PageContainer = styled.div`
	display: flex;
	flex: 5;
	box-sizing: content-box; /* 박스 모델을 content-box로 설정 */
	@media screen and ${devices.md} {
		flex-direction: column;
	}
`;
const SidebarContainer = styled.div`
	flex: 1;
	background-color: #f2f2f2;
	margin-top: 70px;
	margin-right: 80px;
`;
const ProductListContainer = styled.div`
	flex: 4;
`;

export default MainPage;
