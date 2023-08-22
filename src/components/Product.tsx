import React from 'react';
import styled from 'styled-components';
interface ProductProps {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	rating: object;
}

const Product: React.FC<ProductProps> = ({ product }) => {
	return (
		<ProductCard>
			<ProductImage src={product.image} alt={product.title}></ProductImage>
			<h3>{product.title}</h3>
			<p>${product.price}</p>
			<p>${product.description}</p>
			<p>${product.category}</p>
		</ProductCard>
	);
};
const ProductCard = styled.div`
	border: 1px solid #ddd;
	padding: 20px;
	text-align: center;
`;

const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
`;
export default Product;
