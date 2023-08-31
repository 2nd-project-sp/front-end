import ProductDesc from '../../components/ProductDesc/ProductDesc';
import ProductReview from '../../components/ProductReview/ProductReview';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCount from '../../components/ProductCount/ProductCount';

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

const ProductDetail: React.FC = () => {
	const { id } = useParams<{ id?: string }>();
	const navigate = useNavigate();
	const [productData, setProductData] = useState<Product | null>(null);
	const discountPer = 50;
	const currentPrice = productData
		? productData.price - (productData.price * discountPer) / 100
		: 0;
	const reviewNum = productData ? productData.rating.count : 0;

	const [showPopup, setShowPopup] = useState(false);

	const gotoMyBag = () => {
		navigate('/mybag');
	};
	const putCart = () => {
		setShowPopup(true);
	};

	const xbutton = () => {
		setShowPopup(false);
	};

	// API불러옴
	useEffect(() => {
		if (id) {
			// Check if id is not undefined
			fetch('https://fakestoreapi.com/products')
				.then(res => res.json())
				.then(json => {
					const matchingProduct = json.find((product: Product) => product.id === parseInt(id, 10));
					setProductData(matchingProduct || null);
				});
		}
	}, [id]);

	return (
		<ProductDetailWrapper>
			<div className='product-detail'>
				{productData && (
					<ProductBrand>
						<BrandInfoCon>{productData.category}</BrandInfoCon>
					</ProductBrand>
				)}
				{productData && (
					<ProductDetailInfoCon>
						<DetailInfoConImg src={productData.image} alt={productData.title}></DetailInfoConImg>
						<DetailInfoCon>
							<InfoConTextBox>
								<TextBoxText>
									<InfoTextBox>
										<InfoTextBoxTitle>{productData.title}</InfoTextBoxTitle>
										<InfoTextBoxHeart></InfoTextBoxHeart>
										<InfoTextReviewCon>
											<ReviewConStars></ReviewConStars>
											<ReviewConText>{reviewNum}</ReviewConText>
										</InfoTextReviewCon>
									</InfoTextBox>

									<InfoTextPriceCon>
										<PrevPrice>{productData.price}$</PrevPrice>
										<CurrentPriceCon>
											<DiscountPer>{discountPer}%</DiscountPer>
											<CurrentPrice>{currentPrice}$</CurrentPrice>
										</CurrentPriceCon>
									</InfoTextPriceCon>
								</TextBoxText>
								<TextBoxShipping>
									<ShippingTitle>배송정보</ShippingTitle>
									<ShippingInfo>
										<div>배송비</div>
										<div>배송기간</div>
									</ShippingInfo>
								</TextBoxShipping>
							</InfoConTextBox>

							<ProductCount />
							<DetailButtonCon>
								<ButtonConCart onClick={putCart}>장바구니 담기</ButtonConCart>
								<ButtonConPurchase onClick={gotoMyBag}>바로 구매하기</ButtonConPurchase>
							</DetailButtonCon>
						</DetailInfoCon>
						{showPopup && (
							<Popup>
								<PopupXButton>
									<button onClick={xbutton}>X</button>
								</PopupXButton>
								<p>장바구니에 상품이 담겼습니다</p>
								<PopupButton>
									<button onClick={gotoMyBag}>장바구니 바로가기</button>
								</PopupButton>
							</Popup>
						)}
					</ProductDetailInfoCon>
				)}
				<ProductDesc productData={productData} />
				<ProductReview />
			</div>
		</ProductDetailWrapper>
	);
};
//Styled Component
const ProductDetailWrapper = styled.div`
	margin-top: 70px;
`;

const ProductBrand = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

const BrandInfoCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 14px;
`;

const ProductDetailInfoCon = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	margin-bottom: 20px;
`;

const DetailInfoConImg = styled.img`
	width: 300px;
	height: 300px;
`;

const DetailInfoCon = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	margin-left: 45px;
`;

const InfoConTextBox = styled.div`
	width: 100%;
`;
const TextBoxText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-bottom: 16px;
	border-top: 2px solid #000000;
	border-bottom: 1px solid #f4f4f4;
`;

const InfoTextBox = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: space-between;
`;

const InfoTextBoxTitle = styled.h2`
	font-size: 18px;
	width: 80%;
	font-weight: 600;
	margin-top: 10px;
	text-align: left;
`;

const InfoTextBoxHeart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10%;
	height: 100%;
`;

const InfoTextReviewCon = styled.div`
	display: flex;
	align-items: center;
`;

const ReviewConStars = styled.div`
	margin-right: 12px;
`;

const ReviewConText = styled.div`
	color: #5d5d5d;
	font-size: 11px;
	font-weight: 500;
	border-bottom: 0.5px solid #5d5d5d;
`;

const InfoTextPriceCon = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const PrevPrice = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: #c4c4c4;
`;

const CurrentPriceCon = styled.div`
	display: flex;
`;

const DiscountPer = styled.div`
	font-size: 22px;
	color: #ff4800;
	font-weight: 600;
	margin-right: 6px;
`;

const CurrentPrice = styled.div`
	margin-left: 4px;
	color: rgb(0, 0, 0);
	font-size: 22px;
	font-weight: 600;
`;

const TextBoxShipping = styled.div`
	width: 100%;
	height: 50%;
	font-size: 13px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 16px 0;
	border-bottom: 1px solid #f4f4f4;
`;

const ShippingTitle = styled.div`
	font-weight: 700;
`;

const ShippingInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const DetailButtonCon = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
`;

const ButtonCon = styled.button`
	width: 100%;
	font-size: 14px;
`;

const ButtonConCart = styled(ButtonCon)`
	background-color: #fff;
	color: #000000;
	border: 1px solid #c4c4c4;
	margin-right: 5px;
	height: 50px;
`;

const ButtonConPurchase = styled(ButtonCon)`
	background-color: #000000;
	border: 1px solid #000000;
	color: #fff;

	&:hover {
		background-color: #ff4800;
		border: 1px solid #ff4800;
	}
`;

const Popup = styled.div`
	position: fixed;
	width: 30%;
	height: 20%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PopupXButton = styled.div`
	position: absolute;
	right: 20px;
	top: 10px;
`;

const PopupButton = styled.div`
	width: 150px;
	height: 30px;
	border: 1px solid #c4c4c4;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	margin-top: 20px;
`;

export default ProductDetail;
