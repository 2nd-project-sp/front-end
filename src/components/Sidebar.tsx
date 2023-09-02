import React from 'react';
import styled from 'styled-components';

const SidebarTitle = styled.h2`
	font-size: 20px;
	margin-bottom: 10px;
`;

const SidebarContent = styled.div`
	/* 필요한 스타일 설정 */
`;

const Sidebar = () => {
	return (
		<>
			<SidebarTitle>Filters</SidebarTitle>
			<SidebarContent>{/* 여기에 필터 컨텐츠 추가 */}</SidebarContent>
		</>
	);
};

export default Sidebar;
