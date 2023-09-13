import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
const Sidebar = () => {
	const navigate = useNavigate();
	const { category } = useParams();
	const [categorySelected, setCategorySelected] = useState<string>('');
	const OPTIONS = [
		{ value: '', name: 'HOME' },
		{ value: 'women', name: 'WOMEN' },
		{ value: 'men', name: 'MEN' },
		{ value: 'digital', name: 'DIGITAL' },
		{ value: 'interior', name: 'INTERIOR' },
	];
	if (categorySelected !== category) {
		setCategorySelected(category);
	}
	const types = {
		women: [
			{ value: 1, name: '의류' },
			{ value: 2, name: '가방' },
			{ value: 3, name: '신발' },
			{ value: 4, name: '악세사리' },
		],
		men: [
			{ value: 1, name: '의류' },
			{ value: 2, name: '가방' },
			{ value: 3, name: '신발' },
			{ value: 4, name: '악세사리' },
		],
		digital: [
			{ value: 1, name: '모바일•PC' },
			{ value: 2, name: '음향기기' },
			{ value: 3, name: '게임' },
			{ value: 4, name: '사진' },
		],
		interior: [
			{ value: 1, name: '가구' },
			{ value: 2, name: '조명' },
			{ value: 3, name: '홈데코' },
			{ value: 4, name: '아트디자인' },
		],
	};
	const categoryHandler = value => {
		navigate(`/category/${category}?code=${value}`);
	};
	console.log(category);

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategorySelected(event.target.value);
		console.log(event.target.value);
		if (event.target.value === '') {
			navigate(`/`);
		} else {
			navigate(`/category/${event.target.value}?code=1`);
		}
	};
	const selectedCategoryTypes = types[category] || [];
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
			{category && (
				<SidebarContent>
					{selectedCategoryTypes.map((type, index) => (
						<Type key={`type-${index}`}>
							<button onClick={() => categoryHandler(type.value)}>{type.name}</button>
						</Type>
					))}
				</SidebarContent>
			)}
		</>
	);
};
export default Sidebar;

const SidebarTitle = styled.h2`
	select {
		display: none;
	}
	font-size: 1.5rem;
	text-align: left;
	margin-top: 10px;
	margin-bottom: 20px;
	border-bottom: 3px solid #000;
	padding-bottom: 20px;
	@media screen and (${devices.md}) {
		display: flex;
		justify-content: center;
		align-items: center;
		select {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 150px;
			text-align: center;
			font-size: 1rem;
		}
		border: none;
		// margin-bottom: 20px;
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
