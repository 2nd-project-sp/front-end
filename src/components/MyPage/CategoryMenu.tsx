import React from 'react';
import styled from 'styled-components';

const CategoryMenu = () => {
	return (
		<CategoryWrapper>
			<h3>이름</h3>
			<span>나의 정보</span>
			<ul>
				<li>프로필</li>
				<li>주문내역 조회</li>
			</ul>
		</CategoryWrapper>
	);
};

const CategoryWrapper = styled.div`
	text-align: left;

	h3 {
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 40px;
	}

	span {
		margin-bottom: 8px;
		font-size: 17px;
		line-height: 26px;
		font-weight: 800;
		color: #303033;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: start;

		li {
			padding: 10px 10px;
			font-size: 15px;
			color: #5d5d5d;
			font-weight: 200;
		}
	}
`;

export default CategoryMenu;
