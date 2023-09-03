import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner/Banner';
// import { ProductLists } from '../models/Product';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
import { fetchProducts, selectProductData } from '../store/productsSlice';

const MainPage: React.FC = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const productData = useSelector(selectProductData);
	console.log(productData);

	const products = productData?.products;
	useEffect(() => {
		setLoading(true);
		dispatch(fetchProducts());
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
	margin: 100px 3rem 30px 0;
	@media screen and ${devices.md} {
		background-color: #f2f2f2;
		margin: 0px;
	}
`;
const BannerContainer = styled.div`
	display: none; /* 기본적으로 숨김 */
	@media screen and (${devices.md}) {
		display: block; /* 모바일 화면일 때 보이도록 변경 */
		margin-top: 2rem;
		background-color: #f2f2f2;
		width: auto;
		height: auto;
	}
`;
const ProductListContainer = styled.div`
	flex: 4;
`;

export default MainPage;
