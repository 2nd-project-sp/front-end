// React 및 필요한 훅들 임포트
import React, { useCallback, useEffect, useMemo, useState, useRef  } from 'react';
// styled-components 임포트
import styled from 'styled-components';
// 리액트 라우터의 navigate 함수 임포트
import { useNavigate } from "react-router-dom";
// 리덕스의 useSelector, useDispatch 임포트
import { useSelector, useDispatch } from 'react-redux';
// 리덕스 스토어 타입 및 액션 임포트
import { RootState } from '../store/store';
import { setProducts, increaseQuantity, decreaseQuantity, removeProduct } from '../store/cartSlice';
// 상품에 관한 인터페이스 임포트
import { ProductInterface } from '../models/product';
// 리덕스 툴킷에서 액션 생성 함수 임포트
import { PayloadAction, createAction } from '@reduxjs/toolkit';

// 장바구니에 상품 추가 액션 생성
export const addToCart = createAction<ProductInterface>("cart/add");

// 나의 장바구니 페이지 컴포넌트
const MyBagPage: React.FC = () => {
	// 라우팅 함수 사용
	const navigate = useNavigate();
	// 리덕스 디스패치 함수 사용
	const dispatch = useDispatch();
	// 리덕스 스토어에서 상품들 선택
	const products = useSelector((state: RootState) => state.cart.products);

	// 상품 수량 감소 함수
	const handleDecreaseQuantity = useCallback((index: number) => {
		dispatch(decreaseQuantity(index));
	}, [dispatch]);
	
	// 상품 수량 증가 함수
	const handleIncreaseQuantity = useCallback((index: number) => {
		dispatch(increaseQuantity(index));
	}, [dispatch]);

	// 상품 삭제 함수
	const handleRemoveProduct = useCallback((index: number) => {
		dispatch(removeProduct(index));
	}, [dispatch]);

	// 이미지 URL 추출 함수
	const getImageUrl = useCallback((jsonString: string) => {
		try {
			const data = JSON.parse(jsonString);
			return data.url;
		} catch {
			return "오류";
		}
	}, []);

	// 총 가격 계산
	const totalPrice = useMemo(() => {
		return products.reduce((total, product) => {
			return total + (Number(product.price) || 1) * (Number(product.quantity) || 1);
		}, 0);
	}, [products]);

	// 이전 페이지로 돌아가는 함수
	const goBackToPreviousPage = () => {
		navigate(-2);
	}

	// 컴포넌트 렌더링 내용
	return (
		<MyBagPageContainer>
		  <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
		  
		  <h1>장바구니</h1>	  
		  {products.length === 0 ? (
			<EmptyMessage>장바구니에 담긴 물품이 없습니다.</EmptyMessage>
		  ) : (
			products.map((product, index) => (
			  <ProductCard key={index}>
				<ProductImage
				  src={getImageUrl(product.image)}
				  alt={product.title}
				  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
					e.currentTarget.src = "오류";
				  }}
				/>
	
				<ProductDetails>
				  <ProductName>{product.title}</ProductName>
				  <ProductDescription>{product.description}</ProductDescription>
				  <ProductPriceAndQuantity>
					<ProductPrice>${Number(product.price).toFixed(1)}</ProductPrice>
					<QuantityButtons>
					  <QuantityButton onClick={() => handleDecreaseQuantity(index)}>-</QuantityButton>
					  <Quantity>{Number(product.quantity) || 1}</Quantity>
					  <QuantityButton onClick={() => handleIncreaseQuantity(index)}>+</QuantityButton>
					</QuantityButtons>
				  </ProductPriceAndQuantity>
				</ProductDetails>
				
				<RemoveButton onClick={() => handleRemoveProduct(index)}>X</RemoveButton>
			  </ProductCard>
			))
		  )}
	
		  <ButtonContainer>
			<ContinueShoppingButton onClick={goBackToPreviousPage}>쇼핑 계속하기</ContinueShoppingButton>
			{products.length !== 0 && <PaymentButton onClick={() => navigate('/pay')}>결제하기</PaymentButton>}
		  </ButtonContainer>
		</MyBagPageContainer>
	  );
	}

// 나의 장바구니 페이지 컴포넌트 내보내기
export default MyBagPage;

// 아래는 스타일링을 위한 CSS 코드들
const MyBagPageContainer = styled.div`
    margin-top: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 16px;
`;

const ProductName = styled.h3`
    margin: 0;
`;

const ProductPrice = styled.p`
    margin: 8px 0;
`;

const ProductDescription = styled.p`
    margin: 0;
`;

const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProductPriceAndQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const QuantityButtons = styled.div`
    display: flex;
    align-items: center;
`;

const Quantity = styled.div`
    padding: 0 10px;
`;

const QuantityButton = styled.button`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
`;

const ProductCard = styled.div`
    width: 80%;
    margin-top: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const TotalPrice = styled.p`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5em;
    font-weight: bold;
`;

const RemoveButton = styled.button`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
`;

const PaymentButton = styled.button`
	padding: 10px 20px;
	margin-top: 20px;
	background-color: #333;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1.2em;
`;

const ContinueShoppingButton = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const EmptyMessage = styled.p`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; 
    font-size: 1.5em; // 더 큰 텍스트
    color: #555; 
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); //  그림자
    padding: 10px; 
`;
