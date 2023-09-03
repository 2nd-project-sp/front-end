import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner/Banner';
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
				<BannerContainer>
					<Banner />
				</BannerContainer>
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
	margin: 100px 50px 30px 2rem;
	@media screen and ${devices.md} {
		background-color: #f2f2f2;
		margin: 0;
	}
`;
const BannerContainer = styled.div`
	display: none; /* 기본적으로 숨김 */

	@media screen and (${devices.md}) {
		display: block; /* 모바일 화면일 때 보이도록 변경 */
		margin-top: 60px;
		background-color: #f2f2f2;
		width: auto;
		height: auto;
	}
`;
const ProductListContainer = styled.div`
	flex: 4;
`;

export default MainPage;
