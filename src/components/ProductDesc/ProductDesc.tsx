import React from 'react';
import styled from 'styled-components';

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	rating: {
		count: number;
	};
	category: string;
	description: string;
}

interface ProductdataProps {
	productData: Product | null;
}

const ProductDesc: React.FC<ProductdataProps> = ({ productData }) => {
	if (!productData) {
		return null;
	}

	return (
		<ProductDescContainer>
			<ProductDescTitle className='product-desc_title'>상품정보</ProductDescTitle>
			<DescInfo className='desc_info'>
				<InfoText className='info_text'>{productData.title}</InfoText>
				<InfoText className='info_text'>{productData.description}</InfoText>
			</DescInfo>
		</ProductDescContainer>
	);
};
const ProductDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

const ProductDescTitle = styled.h2`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 10px;
`;

const DescInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const InfoText = styled.div`
	width: 80%;
	display: flex;
	justify-content: flex-start;
	text-align: left;
	margin-bottom: 5px;
	font-size: 14px;
`;

export default ProductDesc;
