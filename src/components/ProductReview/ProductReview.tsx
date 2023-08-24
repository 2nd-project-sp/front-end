import React from 'react';
import ReviewCon from './ReviewCon';
interface ProductReviewProps {
	review: number;
}
const ProductReview: React.FC<ProductReviewProps> = ({ review }) => {
	return (
		<div className='product-review'>
			<div className='product-review-info'>
				<h2 className='review_title'>리뷰</h2>
				<p className='review_count'>({review})</p>
			</div>
			<div className='reviewCard'>
				<ReviewCon />
			</div>
		</div>
	);
};

export default ProductReview;
