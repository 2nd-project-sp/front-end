import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

//상품 리스트
interface Product {
	name: string;
	price: number;
	image: string;
	description: string;
	quantity: number;
}

const MyBagPage: React.FC = () => {
	const navigate = useNavigate();//페이지 이동을 위해 navigate 함수
	// 해당부분은 DB에서 불러오는 방식으로 변경해야함
	const initialProducts: Product[] = [
		{
			name: '먹어도먹어도 질리지 않은 사탕',
			price: 20.99,
			image: 'product1.jpg',
			description: 'DB에서 가져와야할 정보입니다.',
			quantity: 1,
		},
		{
			name: '아주 달달한 천도 복숭아',
			price: 15.49,
			image: 'product2.jpg',
			description: 'Description for Product 2',
			quantity: 1,
		},
	];

	const [products, setProducts] = useState<Product[]>(initialProducts);

	//총 상품가격 합계생성
	const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);


	//상품 수량 증가
	const increaseQuantity = (index: number) => {
		const updatedProducts = [...products];
		updatedProducts[index].quantity += 1;
		setProducts(updatedProducts);
	};

	//상품 수량 감소
	const decreaseQuantity = (index: number) => {
		const updatedProducts = [...products];
		updatedProducts[index].quantity = Math.max(1, updatedProducts[index].quantity - 1);
		setProducts(updatedProducts);
	};
	//상품 리스트 제거
	const handleRemoveProduct = (index: number) => {
		const updatedProducts = [...products];
		updatedProducts.splice(index, 1);
		setProducts(updatedProducts);
	};


	return (
		<MyBagPageContainer>
			<TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
			<h1>장바구니</h1>
			{products.map((product, index) => (
				<ProductCard key={index}>
					<ProductImage src={product.image} alt={product.name} />
					<ProductDetails>
						<ProductName>{product.name}</ProductName>
						<ProductDescription>{product.description}</ProductDescription>
						<ProductPriceAndQuantity>
							<ProductPrice>${(product.price * product.quantity).toFixed(2)}</ProductPrice>
							<QuantityButtons>
								<QuantityButton onClick={() => decreaseQuantity(index)}>-</QuantityButton>
								<Quantity>{product.quantity}</Quantity>
								<QuantityButton onClick={() => increaseQuantity(index)}>+</QuantityButton>
							</QuantityButtons>
						</ProductPriceAndQuantity>
					</ProductDetails>
					<RemoveButton onClick={() => handleRemoveProduct(index)}>X</RemoveButton>
				</ProductCard>
			))}
			  <PaymentButton onClick={() => navigate('/pay')}>결제하기</PaymentButton>
		</MyBagPageContainer>
	);
}

export default MyBagPage;


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
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
`;