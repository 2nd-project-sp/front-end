import React from 'react';
import styled from 'styled-components';

import CategoryMenu from '../components/MyPage/CategoryMenu';
import Profile from '../components/MyPage/Profile';
import Purchase from '../components/MyPage/Purchase';

const MyPage = () => {
	return (
		<MyPageContainer>
			<MyPageLeft>
				<CategoryMenu />
			</MyPageLeft>

			<MyPageRight>
				<Profile />
				<Purchase />
			</MyPageRight>
		</MyPageContainer>
	);
};

const MyPageContainer = styled.div`
	width: 1050px;
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
`;

const MyPageLeft = styled.div`
	padding: 0 50px 0 0;
	display: flex;
	flex-direction: column;
	align-items: start;
	font-size: 14px;
	width: 230px;
`;

const MyPageRight = styled.div`
	flex: 1;
`;

export default MyPage;
