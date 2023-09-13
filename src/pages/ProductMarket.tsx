import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductManage from '../components/ProductManage';
import { addToManage } from '../store/manageSlice';
import { v4 as uuidv4 } from 'uuid';

const ProductMarket: React.FC = () => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const [productInfo, setProductInfo] = useState({
		id: uuidv4(),
		title: '',
		category: '',
		price: 0,
		brand: '',
		description: '',
		image: '',
		quantity: 1,
	});

	const option = ['여성의류', '남성의류', '인테리어', '주방'];

	const handleSubmit = e => {
		e.preventDefault();
		const { id, title, price, brand, description, image, quantity, category } = productInfo;
		const updatedProductInfo = {
			id,
			category,
			title,
			price,
			brand,
			description,
			image,
			quantity,
		};
		dispatch(addToManage(updatedProductInfo)); //디스패치하고
		//비워
		setProductInfo({
			id: uuidv4(),
			category: '',
			title: '',
			price: 0,
			brand: '',
			description: '',
			image: '',
			quantity: 1,
		});
		setQuantity(1);
	};

	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			// setProductImage(imageUrl);
			setProductInfo({ ...productInfo, image: imageUrl });
		}
	};

	const handleImageClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleDecreaseQuantity = () => {
		setQuantity(prevQuantity => prevQuantity - 1);
		setProductInfo(prevProductInfo => ({
			...prevProductInfo,
			quantity: quantity - 1,
		}));
	};

	const handleIncreaseQuantity = () => {
		setQuantity(prevQuantity => prevQuantity + 1);
		setProductInfo(prevProductInfo => ({
			...prevProductInfo,
			quantity: quantity + 1,
		}));
	};

	return (
		<>
			<ProductMarketWrapper>
				<ProductMarketTitle>
					<div>상품등록</div>
				</ProductMarketTitle>

				<ProductAdd>
					<ProductAddInput>
						<Label htmlFor='imageUpload'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1829/1829371.png'
								alt='카메라사진'
								onClick={handleImageClick}
							/>
						</Label>
						<input
							id='imageUpload'
							type='file'
							accept='image/*'
							onChange={handleImageUpload}
							ref={fileInputRef}
							style={{ display: 'none' }}
						/>
						<ProductImagePreview>
							{productInfo ? <img src={productInfo.image} /> : ''}
						</ProductImagePreview>
					</ProductAddInput>
					<ProductAddInput>
						<div>카테고리</div>
						<select
							value={productInfo.category}
							onChange={e => {
								console.log('이벤트', e);
								setProductInfo({ ...productInfo, category: e.target.value });
							}}
						>
							<option value=''>카테고리 선택</option>
							{option.map(it => (
								<option value={it} key={it}>
									{it}
								</option>
							))}
						</select>
					</ProductAddInput>
					<ProductAddInput>
						<div>이름</div>
						<input
							value={productInfo.title}
							onChange={e => {
								setProductInfo({ ...productInfo, title: e.target.value });
							}}
							placeholder='상품 이름을 입력하세요'
						></input>
					</ProductAddInput>
					<ProductAddInput>
						<div>브랜드</div>
						<input
							value={productInfo.brand}
							onChange={e => {
								setProductInfo({ ...productInfo, brand: e.target.value });
							}}
							placeholder='상품의 브랜드를 입력하세요'
						></input>
					</ProductAddInput>

					<ProductAddInput>
						<div>가격</div>
						<input
							value={productInfo.price}
							onChange={e => {
								setProductInfo({ ...productInfo, price: e.target.value });
							}}
							placeholder='상품의 가격을 입력하세요'
						></input>
					</ProductAddInput>
					<ProductAddInput>
						<div>설명</div>
						<input
							value={productInfo.description}
							onChange={e => {
								setProductInfo({ ...productInfo, description: e.target.value });
							}}
							placeholder='상품의 설명을 입력하세요'
						></input>
					</ProductAddInput>
					<ProductAddInput>
						<ProductAddCount>
							<ProductAddButton onClick={handleDecreaseQuantity}>-</ProductAddButton>
							<Quantity>
								<input type='number' value={quantity} />
							</Quantity>
							<ProductAddButton onClick={handleIncreaseQuantity}>+</ProductAddButton>
						</ProductAddCount>
					</ProductAddInput>
					<form onSubmit={handleSubmit}>
						<ProductMarketSubmit>
							<button type='submit'>등록하기</button>
						</ProductMarketSubmit>
					</form>
				</ProductAdd>
			</ProductMarketWrapper>

			<ProductManage />
		</>
	);
};

export default ProductMarket;

const ProductMarketWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	justify-content: center;
	align-items: center;
`;

const ProductMarketTitle = styled.div`
	width: 50%;
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 20px;
	border-bottom: 2px solid rgb(0, 0, 0);
`;
const ProductAdd = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const ProductAddInput = styled.div`
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	> div {
		margin-right: 10px;
	}
	> input {
		border: none;
		border-bottom: 1px solid #f4f4f4;
	}
`;

const ProductImagePreview = styled.div`
	> img {
		width: 50px;
		object-fit: cover;
	}
`;
const Label = styled.label`
	cursor: pointer;
	margin-right: 10px;
	> img {
		width: 50px;
		object-fit: cover;
		cursor: pointer;
	}
`;

const ProductMarketSubmit = styled.div`
	display: flex;
	margin-top: 10px;

	justify-content: center;
	> button {
		width: 100px;
		height: 30px;
		font-size: 14px;
		background-color: #fff;
		color: #000000;
		border: 1px solid #c4c4c4;
	}
`;

const ProductAddCount = styled.div`
	display: flex;
	align-items: center;
`;

const ProductAddButton = styled.button`
	background-color: #f0f0f0;
	border: none;
	padding: 5px 10px;
	font-size: 16px;
	cursor: pointer;
`;

const Quantity = styled.span`
	display: flex;
	align-items: center;
	width: 30px;
	font-size: 18px;

	> input {
		text-align: center;
		width: 30px;
		border: none;
	}
	> input::-webkit-outer-spin-button,
	> input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;
