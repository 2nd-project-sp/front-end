import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner/Banner';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
import { setProducts, selectProducts } from '../store/testProductSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/index';

const MainPage: React.FC = () => {
	const dispatch = useDispatch();
	const selectedProducts = useSelector(selectProducts);
	const { isLoading, isError } = useQuery({
    queryKey: ['testProducts'],
    queryFn: fetchProducts,
    staleTime: 3000,
    cacheTime: 60 * 1000,
    onSuccess: (fetchedData) => {
      if (!isError) {
        dispatch(setProducts(fetchedData.products));
      }
    },
  });
	return (
		<>
			<PageContainer>
				{isLoading && 'Loading...'}
				<BannerContainer>
					<Banner />
				</BannerContainer>
				<SidebarContainer>
					<Sidebar />
				</SidebarContainer>
				<ProductListContainer>
					<ProductList products={selectedProducts} />
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
	margin: 100px 3rem 30px 3rem;
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
