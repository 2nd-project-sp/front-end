import React from 'react';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
const Sidebar = () => {
	const category = '여성의류';
	const types = [
		'ALL',
		'NEW',
		'상의',
		'아우터',
		'원피스',
		'바지',
		'니트웨어',
		'스커트',
		'엑티브웨어',
		'이너웨어',
		'홈웨어',
		'하이엔드',
		'점프수트',
		'EXCLUSIVE',
	];
	return (
		<>
			<SidebarTitle>{category}</SidebarTitle>
			<SidebarContent>
				{types.map((type, index) => (
					<Type key={`type-${index}`}>
						<a href='/'>{type}</a>
					</Type>
				))}
			</SidebarContent>
		</>
	);
};

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
