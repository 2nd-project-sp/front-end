import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../assets/styles/constants';
import { ProductInterface } from '../../models/product';

const Product: React.FC<ProductInterface> = ({ product }) => {
	return (
		<Link to={`/product/${product.id}`}>
			<ProductCard>
				<ProductImage>
					{/* <img src={product.image} alt={product.title} /> */}
					<img
						src={
							'	https://img.29cm.co.kr/item/202308/11ee35923504abf7aa4f312e96f92cf3.jpg?width=400'
						}
						alt={product.title}
					/>
				</ProductImage>
				<ProductTitle>
					<p>{product.category}</p>
					<h5>{product.title}</h5>
					<strong>{product.price}</strong>
				</ProductTitle>
				<ProductInfo>
					<Discount>10%</Discount>
					<DiscountedPrice>{Math.round(product.price * 0.9)}</DiscountedPrice>
				</ProductInfo>
				<ProductInfo2>
					<ul>
						<li color='#1d1d1d'>쿠폰</li>
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
	margin-bottom: 1rem;
	text-align: left;
	font-size: 16px;
	font-family: campton, 'Apple SD Gothic Neo', NanumBarunGothic, 나눔바른고딕, 'Malgun Gothic',
		'맑은 고딕', dotum, sans-serif;
`;
const ProductTitle = styled.div`
	h5 {
		margin-bottom: 1rem;
		margin-top: 0.5rem;
	}
	strong {
		color: rgb(196, 196, 196);
		line-height: 1;
		font-weight: normal;
		text-decoration: line-through;
		line-height: 1.4;
	}
	@media screen and ${devices.md} {
		h5 {
			margin-bottom: 1rem;
		}
		strong {
			color: rgb(196, 196, 196);
			line-height: 1;
			font-weight: normal;
			text-decoration: line-through;
		}
	}
`;

const ProductInfo = styled.div`
	div {
		display: flex;
		justify-content: space-between;
	}
`;
const Discount = styled.span`
	margin-right: 1rem; /* 여백을 조정할 수 있는 값으로 변경하세요 */
	color: var(--ruler-scale-color-red-500);
	font-weight: bold;
`;

const DiscountedPrice = styled.strong``;
const ProductInfo2 = styled.div`
	ul {
		list-style: none;
		padding: 0.2rem;
		display: flex; /* 리스트 아이템을 가로로 정렬하기 위해 flex로 설정 */
		flex-wrap: wrap; /* 리스트 아이템이 가로로 넘칠 경우 줄 바꿈 처리 */
	}

	li {
		color: #1d1d1d;
		font-size: 70%;
		border: 1px solid #ccc;
		padding: 0.2rem; /* 리스트 아이템 내부 패딩 추가 */
		margin-right: 0.5rem; /* 리스트 아이템 간격 설정 */
		margin-bottom: 0.5rem; /* 아래 여백 설정 */
	}
`;
const ProductImage = styled.div`
	overflow: hidden;
	position: relative;
	padding-top: 100%;
	background-color: rgba(244, 244, 244, 0.5);
	img {
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
export default Product;
