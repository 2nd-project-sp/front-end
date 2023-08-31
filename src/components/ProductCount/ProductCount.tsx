import React, { useState } from 'react';
import styled from 'styled-components';

const ProductCount: React.FC = () => {
	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<ProductCountContainer>
			<QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
			<Quantity>{quantity}</Quantity>
			<QuantityButton onClick={increaseQuantity}>+</QuantityButton>
		</ProductCountContainer>
	);
};
const ProductCountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;
const QuantityButton = styled.button`
	background-color: #f0f0f0;
	border: none;
	padding: 5px 10px;
	font-size: 16px;
	cursor: pointer;
`;
const Quantity = styled.span`
	width: 30px;
	text-align: center;
	font-size: 18px;
`;

export default ProductCount;
