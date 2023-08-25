import React, { useEffect, useState } from 'react';
import ReviewCon from './ReviewCon';

interface Review {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

const ProductReview: React.FC = () => {
	const [reviews, setReviews] = useState<Review[]>([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then(res => res.json())
			.then(data => setReviews(data.slice(0, 20)));
	}, []);

	console.log(reviews);
	return (
		<div className='product-review'>
			<div className='product-review-info'>
				<h2 className='review_title'>리뷰</h2>
				<p className='review_count'>({reviews.length})</p>
			</div>
			<div className='reviewCard'>
				<ReviewCon reviews={reviews} />
			</div>
		</div>
	);
};

export default ProductReview;
