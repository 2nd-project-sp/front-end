import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductManage from '../components/ProductManage';
import { addToManage } from '../store/manageSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { fetchCategories, fetchSubCategories } from '../api/category';

export interface CustomProductInterface {
	categoryId: number;
	subCategoryId: number;
	optionId?: number;
	name: string;
	brand: string;
	price: number;
	stock: number;
	description: string;
	sellStatus: string;
	isNew: boolean;
	isDiscount: boolean;
	discountRate: number;
	delivaryPrice: number;
	saleStartDate: Date | null;
	saleEndDate: Date | null;
	imageUrl: string;
	imageType?: string;
}

const ProductMarket: React.FC = () => {
	const apiEndpoint = 'http://15.164.128.162:8080/api/v1/products';
	const dispatch = useDispatch();
	//수량 기본값이 1
	const [stock, setStock] = useState(1);
	const [isDiscount, setIsDiscount] = useState(false);
	//신상품
	const [isNew, setIsNew] = useState(false);
	//할인기간
	const [saleStartDate, setSaleStartDate] = useState(null);
	const [saleEndDate, setSaleEndDate] = useState(null);
	//카테고리,서브카테고리
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);

	const [productInfo, setProductInfo] = useState({
		name: '',
		categoryId: 0,
		subCategoryId: 0,
		optionId: 0,
		price: 0,
		brand: '',
		description: '',
		sellStatus: '',
		imageUrl: '',
		stock: 1,
		isDiscount: false,
		discountRate: 0,
		delivaryPrice: 0,
		isNew: false,
		saleStartDate: null as Date | null,
		saleEndDate: null as Date | null,
	});

	useEffect(() => {
		fetchCategories().then(categoryList => {
			if (categoryList) {
				setCategories(categoryList);
			} else {
				console.error('카테고리 목록 가져오기 실패');
			}
		});

		fetchSubCategories(productInfo.categoryId).then(subCategoryList => {
			if (subCategoryList) {
				setSubCategories(subCategoryList);
			} else {
				console.error('서브카테고리 목록 가져오기 실패');
			}
		});
	}, [productInfo.categoryId]);

	//할인기간 핸들러
	const handleSaleStartDateChange = (date: Date | null) => {
		setProductInfo({
			...productInfo,
			saleStartDate: date,
		});
	};

	const handleSaleEndDateChange = (date: Date | null) => {
		setProductInfo({
			...productInfo,
			saleEndDate: date,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const {
			name,
			categoryId,
			subCategoryId,
			price,
			brand,
			description,
			sellStatus,
			imageUrl,
			stock,
			isDiscount,
			discountRate,
			delivaryPrice,
			isNew,
			saleStartDate,
			saleEndDate,
			optionId,
		} = productInfo;

		const updatedProductInfo: CustomProductInterface = {
			name,
			categoryId,
			subCategoryId,
			price,
			brand,
			description,
			sellStatus,
			imageUrl,
			stock,
			isDiscount,
			discountRate,
			delivaryPrice,
			isNew,
			saleStartDate,
			saleEndDate,
			optionId,
		};

		dispatch(addToManage(updatedProductInfo)); //디스패치는 잘 되는데  api왜 안될까
		try {
			const response = await axios.post(apiEndpoint, updatedProductInfo);
			console.log('API Response:', response.data);
			dispatch(addToManage(response.data));
		} catch (error) {
			console.error('API Error:', error);
		}

		//비워
		setProductInfo({
			categoryId: 0,
			subCategoryId: 0,
			optionId: 0,
			name: '',
			price: 0,
			brand: '',
			description: '',
			sellStatus: '',
			imageUrl: '',
			stock: 1,
			isDiscount: false,
			discountRate: 0,
			delivaryPrice: 0,
			isNew: false,
			saleStartDate: null,
			saleEndDate: null,
		});
		setStock(1);
		setIsNew(false);
		setIsDiscount(false);
		setSaleStartDate(null);
		setSaleEndDate(null);
	};

	const fileInputRef = useRef<HTMLInputElement | null>(null);
	//할인 유무 핸들러
	const discountHandler = () => {
		setIsDiscount(!isDiscount);
	};
	//신상 유무 핸들러
	const newHandler = () => {
		setIsNew(!isNew);
		setProductInfo(prevProductInfo => ({
			...prevProductInfo,
			isNew: !prevProductInfo.isNew,
		}));
	};

	//이미지 임포트
	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setProductInfo({ ...productInfo, imageUrl: imageUrl });
		}
	};

	const handleImageClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleDecreaseQuantity = () => {
		setStock(prevQuantity => prevQuantity - 1);
		setProductInfo(prevProductInfo => ({
			...prevProductInfo,
			stock: stock - 1,
		}));
	};

	const handleIncreaseQuantity = () => {
		setStock(prevQuantity => prevQuantity + 1);
		setProductInfo(prevProductInfo => ({
			...prevProductInfo,
			stock: stock + 1,
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
							{productInfo ? <img src={productInfo.imageUrl} /> : ''}
						</ProductImagePreview>
					</ProductAddInput>

					<ProductAddInput>
						신상품 <input type='checkbox' checked={isNew} onChange={newHandler} />
					</ProductAddInput>
					<ProductDiscount>
						할인
						<input type='checkbox' checked={isDiscount} onChange={discountHandler} />
						{isDiscount ? (
							<ProductDiscountInput>
								<DisCountRate>
									<input
										value={productInfo.discountRate}
										onChange={e => {
											setProductInfo({ ...productInfo, discountRate: Number(e.target.value) });
										}}
									/>
									%
								</DisCountRate>
								<DatePicker
									selected={productInfo.saleStartDate}
									onChange={handleSaleStartDateChange}
									selectsStart
									startDate={productInfo.saleStartDate}
									endDate={productInfo.saleEndDate}
									placeholderText='시작일'
								/>
								<DatePicker
									selected={productInfo.saleEndDate}
									onChange={handleSaleEndDateChange}
									selectsEnd
									startDate={productInfo.saleStartDate}
									endDate={productInfo.saleEndDate}
									placeholderText='종료일'
								/>
							</ProductDiscountInput>
						) : (
							''
						)}
					</ProductDiscount>

					<ProductAddInput>
						<div>카테고리</div>
						<select
							value={productInfo.categoryId}
							onChange={e => {
								const categoryId = e.target.value;
								setProductInfo({ ...productInfo, categoryId: categoryId });
							}}
						>
							<option value=''>카테고리</option>
							{categories &&
								categories.map(category => (
									<option value={category.id} key={category.id}>
										{category.name}
									</option>
								))}
						</select>

						<select
							value={productInfo.subCategoryId}
							onChange={e => {
								const subCategoryId = e.target.value;
								setProductInfo({ ...productInfo, subCategoryId: subCategoryId });
							}}
						>
							<option value=''>서브카테고리</option>
							{subCategories &&
								subCategories.map(subcategory => (
									<option value={subcategory.id} key={subcategory.id}>
										{subcategory.name}
									</option>
								))}
						</select>
					</ProductAddInput>
					<ProductAddInput>
						<div>이름</div>
						<input
							value={productInfo.name}
							onChange={e => {
								setProductInfo({ ...productInfo, name: e.target.value });
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
								setProductInfo({ ...productInfo, price: Number(e.target.value) });
							}}
							placeholder='상품의 가격을 입력하세요'
						></input>
					</ProductAddInput>
					<ProductAddInput>
						<div>배송비</div>
						<input
							value={productInfo.delivaryPrice}
							onChange={e => {
								setProductInfo({ ...productInfo, delivaryPrice: Number(e.target.value) });
							}}
						/>
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
								<input
									type='number'
									value={stock.toString()}
									onChange={e => setStock(parseInt(e.target.value, 10) || 0)}
								/>
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
	display: flex;
	justify-content: flex-start;
`;
const ProductAdd = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const ProductAddInput = styled.div`
	display: flex;
	margin-bottom: 10px;
	justify-content: center;
	align-items: center;
	> div {
		margin-right: 10px;
	}
	> input {
		border: none;
		border-bottom: 1px solid #f4f4f4;
	}
`;
const ProductDiscount = styled.div`
	height: 20px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
const ProductDiscountInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		margin-right: 10px;
	}
	> input {
		border: none;
		border-bottom: 1px solid #f4f4f4;
	}
`;

const DisCountRate = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
	margin-bottom: 0;

	> input {
		margin-left: 10px;
		width: 30px;
		border: none;
		border-bottom: 1px solid #f4f4f4;
		margin-bottom: 0;
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
