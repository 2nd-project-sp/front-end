import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
import { useNavigate } from 'react-router';
const Sidebar = () => {
	const navigate = useNavigate();
	const [categorySelected, setCategorySelected] = useState<string>('main');
	const OPTIONS = [
		{ value: 'main', name: '선택' },
		{ value: 'women', name: 'WOMEN' },
		{ value: 'men', name: 'MEN' },
		{ value: 'digital', name: 'DIGITAL' },
		{ value: 'interior', name: 'INTERIOR' },
	];
	const types = ['의류', '가방', '신발', '악세사리'];
	const categoryHandler = () => {
		navigate('/');
	};
	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategorySelected(event.target.value);
		if (event.target.value !== 'main') {
			navigate(`/category/${categorySelected}?code=1`)
		} else {
			navigate(`/`)
		}
	};
	return (
		<>
			<SidebarTitle>
				<select value={categorySelected} onChange={handleCategoryChange}>
					{OPTIONS.map(option => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
				</select>
			</SidebarTitle>
			<SidebarContent>
				{types.map((type, index) => (
					<Type key={`type-${index}`}>
						<button onClick={categoryHandler}>{type}</button>
					</Type>
				))}
			</SidebarContent>
		</>
	);
};
// const [optionSelected, setOptionSelected] = useState<string>('');

// 	const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		setOptionSelected(event.target.value);
// 	};

// 	return (
// 		<ProductOptionContainer>
// 			<ProductOptionSelect value={optionSelected} onChange={handleOptionChange}>
// 				<option value=''>옵션 선택</option>
// 				<option value='mall1'>S</option>
// 				<option value='mall2'>M</option>
// 				<option value='mall3'>L</option>
// 				<option value='mall3'>XL</option>
// 			</ProductOptionSelect>
// 		</ProductOptionContainer>
// 	);
export default Sidebar;

const SidebarTitle = styled.h2`
	font-size: 1.5rem;
	text-align: left;
	margin-top: 10px;
	margin-bottom: 20px;
	border-bottom: 3px solid #000;
	padding-bottom: 20px;
	@media screen and (${devices.md}) {
		text-align: center;
		border: none;
		font-size: 1rem;
		margin-bottom: 0px;
		padding-bottom: 0px;
	}
`;

const SidebarContent = styled.div`
	@media screen and (${devices.md}) {
		display: grid;
		padding: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		grid-gap: 0.3rem; /* 칸 사이의 간격 설정 */
	}
`;
const Type = styled.div`
	text-align: left;
	font-weight: 500;
	font-size: 1.3rem;
	padding: 0 2rem 0.5rem 0;
	color: #5d5d5d;
	@media screen and (${devices.md}) {
		background-color: #ffffff;
		padding: 0.5rem;
		font-size: 0.5rem;
		font-weight: 600;
		line-height: 24px;
	}
`;
