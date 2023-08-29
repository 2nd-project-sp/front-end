import ProductDesc from '../../components/ProductDesc/ProductDesc';
import ProductReview from '../../components/ProductReview/ProductReview';
import { useEffect, useState } from 'react';
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
	// const reviewNum = productData ? productData.rating.count : 0;

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
		<div className='product-detail'>
			{productData && (
				<div className='product-brand'>
					<div className='brand_infoCon'>
						<div>{productData.category}</div>
					</div>
				</div>
			)}
			{productData && (
				<div className='product-detail_infoCon'>
					<img className='detail_infoCon_img' src={productData.image} alt={productData.title} />
					<div className='detail_infoCon'>
						<div className='infoCon_textBox'>
							<div className='textBox_text'>
								<div className='infoTextBox'>
									<h2 className='infoTextBox_title'>{productData.title}</h2>
									<div className='infoTextBox_heart'></div>
								</div>
								<div className='infoText_reviewCon'>
									<div className='reviewCon_stars'></div>
									{/* <div className='reviewCon_text'>{reviewNum}</div> */}
								</div>
								<div className='infoText_priceCon'>
									<div className='prevPrice'>{productData.price}$</div>
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
						<ProductCount />
						<div className='detail_buttonCon'>
							<button className='buttonCon_cart' onClick={putCart}>
								장바구니 담기
							</button>
							<button className='buttonCon_purchase' onClick={gotoMyBag}>
								바로 구매하기
							</button>
						</div>
					</div>
					{showPopup && (
						<div className='popup'>
							<div className='popup-xbutton'>
								<button onClick={xbutton}>X</button>
							</div>

							<p>장바구니에 상품이 담겼습니다</p>
							<div className='popup-button'>
								<button onClick={gotoMyBag}>장바구니 바로가기</button>
							</div>
						</div>
					)}
				</div>
			)}
			<ProductDesc productData={productData} />
			<ProductReview />
		</div>
	);
};

export default ProductDetail;
