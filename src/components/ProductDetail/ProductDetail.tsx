import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import ProductDesc from '../ProductDesc/ProductDesc';

const ProductDetail: React.FC = () => {
	return (
		<div className='product-detail'>
			<div className='product-brand'>
				{/* <img src='https://img.29cm.co.kr/next-brand/2022/03/18/bd3af322f4a94fa98ee5929df5e28384_20220318145010.jpg?width=100' /> */}
				<div className='brand_infoCon'>
					<div>브랜드이름이용 샘숭</div>
					{/* <div>Do what you can't</div> */}
					{/* <button>BRAND HOME</button> */}
				</div>
			</div>
			<div className='product-detail_infoCon'>
				<img
					className='detail_infoCon_img'
					src='https://img.29cm.co.kr/next-product/2023/04/25/ec3d805879fc46c1afd49ec5d3428911_20230425133633.jpg?width=700'
				/>
				<div className='detail_infoCon'>
					<div className='infoCon_textBox'>
						<div className='textBox_text'>
							<div className='infoTextBox'>
								<h2 className='infoTextBox_title'>상품이름이용 미니 건조기 어쩌구 저쩌구</h2>
								<div>
									<FontAwesomeIcon icon={faHeart} />
								</div>
							</div>
							<div className='infoText_reviewCon'>
								<div className='reviewCon_stars'>
									<FontAwesomeIcon icon={faStar} />
									<FontAwesomeIcon icon={faStar} />
									<FontAwesomeIcon icon={faStar} />
									<FontAwesomeIcon icon={faStar} />
									<FontAwesomeIcon icon={faStar} />
								</div>
								<div className='reviewCon_text'>75개 리뷰보기</div>
							</div>
							<div className='infoText_priceCon'>
								<div className='prevPrice'>599,000</div>
								<div className='currentPrice_Con'>
									<div className='discountPer'>23%</div>
									<div className='currentPrice'>459,690</div>
								</div>

								<div className='priceCon_point'>4,890p (1%) 적립</div>
							</div>
						</div>
						<div className='textBox_shipping'>
							<div className='shipping-title'>배송정보</div>
							<div className='shipping-info'>
								<div>배송비</div>
								<div>배송기간</div>
							</div>
						</div>
					</div>
					<div className='detail_buttonCon'>
						<button className='buttonCon_cart'>장바구니 담기</button>
						<button className='buttonCon_purchase'>바로 구매하기</button>
					</div>
				</div>
			</div>
			<ProductDesc />
		</div>
	);
};

export default ProductDetail;
