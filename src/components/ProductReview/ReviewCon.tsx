import React from 'react';

const ReviewCon: React.FC = () => {
	return (
		<div className='reviewCon'>
			<div className='reviewCon_name'></div>
			<div className='reviewCon_option'>옵션 : [색상]산토리니 베이지</div>
			<div className='reviewCon_reviewBox'>
				<div className='reviewCon_review'>
					엘땡이랑 고민했는데 심플 깔끔한 디자인 때문에 선택했어요. 물통이 크니까 좋네요. 저소음
					아니여도 조용해요.
				</div>
				<div className='reviewCon_img'>
					<img src='https://img.29cm.co.kr/next-product/2023/08/21/fd5037e86ec24907a2b14e8b2176657e_20230821233017.jpg?width=120' />
				</div>
			</div>
		</div>
	);
};

export default ReviewCon;
