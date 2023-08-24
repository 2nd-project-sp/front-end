import React from 'react';

interface ProductdataProps {
	productData: any;
}

const ProductDesc: React.FC<ProductdataProps> = ({ productData }) => {
	console.log(productData[0]);
	return (
		<div className='product-desc'>
			<h2 className='product-desc_title'>상품정보</h2>
			<div className='desc_info'>
				<div className='info_text'>{productData[0].title}</div>
				<div className='info_text'>{productData[0].description}</div>
			</div>
		</div>
	);
};

export default ProductDesc;
