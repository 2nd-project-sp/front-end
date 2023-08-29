import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface ProductProps {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
}

const Product: React.FC<ProductProps> = ({ product }) => {
	return (
		<Link to={`/product/${product.id}`}>
			<ProductCard>
				<ProductImage>
					<img src={product.image} alt={product.title} />
				</ProductImage>
				<ProductTitle>
					<h5>{product.title}</h5>
					<p>{product.category}</p>
					<strong>{product.price}</strong>
				</ProductTitle>
				<ProductInfo>
					<span>10%</span>
					<strong>{product.price * 0.9}</strong>
				</ProductInfo>
				<ProductInfo2>
					<ul>
						<li color='#1d1d1d'>신상품</li>
					</ul>
				</ProductInfo2>
			</ProductCard>
		</Link>
	);
};

const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border: 1px solid #eaefef;
	margin-bottom: 1rem;
	text-align: left;
	font-family: campton, 'Apple SD Gothic Neo', NanumBarunGothic, 나눔바른고딕, 'Malgun Gothic',
		'맑은 고딕', dotum, sans-serif;
`;
const ProductTitle = styled.div`
	h5 {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}
	strong {
		color: rgb(196, 196, 196);
		line-height: 1;
		font-size: 11px;
		font-weight: normal;
		text-decoration: line-through;
	}
`;

const ProductInfo = styled.div`
	div {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;

		strong {
			font-size: 1rem;
			font-weight: bold;
		}

		span {
			font-size: 0.8rem;
			color: #999;
		}
	}
`;
const ProductInfo2 = styled.div`
	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			margin-bottom: 0.2rem;
			color: #1d1d1d;
		}
	}
`;
const ProductImage = styled.div`
	overflow: hidden;
	position: relative;
	padding-top: 100%;
	background-color: rgb(244, 244, 244);
	img {
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
export default Product;
