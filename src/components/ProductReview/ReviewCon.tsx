import React from 'react';

interface Review {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

interface ReviewConProps {
	reviews: Review[];
}

const ReviewCon: React.FC<ReviewConProps> = ({ reviews }) => {
	return (
		<div className='reviewCon'>
			{reviews.length > 0 &&
				reviews.map(review => (
					<div key={review.id} className='reviewCon_item'>
						<div className='reviewCon_email'>{review.email}</div>
						<div className='reviewCon_option'>옵션 : [색상]산토리니 베이지</div>
						<div className='reviewCon_reviewBox'>
							<div className='reviewCon_review'>{review.body}</div>
							<div className='reviewCon_img'>
								<img
									src='https://img.29cm.co.kr/next-product/2023/08/21/fd5037e86ec24907a2b14e8b2176657e_20230821233017.jpg?width=120'
									alt='Review'
								/>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ReviewCon;
