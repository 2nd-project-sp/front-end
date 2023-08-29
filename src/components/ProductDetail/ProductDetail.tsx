import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import ProductDesc from '../ProductDesc/ProductDesc';
import ProductReview from '../ProductReview/ProductReview';

interface ProductProps {
	productData: any;
}

const ProductDetail: React.FC<ProductProps> = ({ productData }) => {
	const discountPer = 23;
	const currentPrice =
		productData && productData[0].price - (productData[0].price * discountPer) / 100;

	const review = productData && productData[0].rating.count;

	return (
		<div className='product-detail'>
			<div className='product-brand'>
				<div className='brand_infoCon'>{/* <div>category: {productData[0].category}</div> */}</div>
			</div>

			<div className='product-detail_infoCon'>
				<img className='detail_infoCon_img' src={productData[0].image} />
				<div className='detail_infoCon'>
					<div className='infoCon_textBox'>
						<div className='textBox_text'>
							<div className='infoTextBox'>
								<h2 className='infoTextBox_title'>{productData[0].title}</h2>
								<div className='infoTextBox_heart'>
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
								<div className='reviewCon_text'>{productData[0].rating.count}</div>
							</div>
							<div className='infoText_priceCon'>
								<div className='prevPrice'>{productData[0].price}$</div>
								<div className='currentPrice_Con'>
									<div className='discountPer'>{discountPer}%</div>
									<div className='currentPrice'>{currentPrice}$</div>
								</div>
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

			<ProductDesc productData={productData} />
			<ProductReview review={review} />
		</div>
	);
};

export default ProductDetail;
