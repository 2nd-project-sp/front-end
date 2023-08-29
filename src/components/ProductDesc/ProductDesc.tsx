import React from 'react';

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
		<div className='product-desc'>
			<h2 className='product-desc_title'>상품정보</h2>
			<div className='desc_info'>
				<div className='info_text'>{productData.title}</div>
				<div className='info_text'>{productData.description}</div>
			</div>
		</div>
	);
};

export default ProductDesc;
