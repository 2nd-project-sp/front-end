import React, { useState } from 'react';

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
		<div className='product-count'>
			<button className='quantity-button' onClick={decreaseQuantity}>
				-
			</button>
			<span className='quantity'>{quantity}</span>
			<button className='quantity-button' onClick={increaseQuantity}>
				+
			</button>
		</div>
	);
};

export default ProductCount;
