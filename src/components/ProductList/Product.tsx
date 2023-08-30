import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductInterface } from '../../model/Products';

const Product: React.FC<ProductInterface> = ({ product }) => {
	return (
		<Link to={`/product/${product.id}`}>
			<ProductCard>
				<ProductImage>
					{/* <img src={product.image} alt={product.title} /> */}
					<img src={product.thumbnail} alt={product.title} />
				</ProductImage>
				<ProductTitle>
					<h5>{product.title}</h5>
					<p>{product.category}</p>
					<strong>{product.price}</strong>
				</ProductTitle>
				<ProductInfo>
					<Discount>10%</Discount>
					<DiscountedPrice>{Math.round(product.price * 0.9)}</DiscountedPrice>
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
	}
`;
const Discount = styled.span`
	margin-right: 1rem; /* 여백을 조정할 수 있는 값으로 변경하세요 */
`;

const DiscountedPrice = styled.strong`
	font-size: 1rem;
	font-weight: bold;
`;
const ProductInfo2 = styled.div`
	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			margin-bottom: 0.2rem;
			color: #1d1d1d;
			// border: 1px solid #ccc;
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
