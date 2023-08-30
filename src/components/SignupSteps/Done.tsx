import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Done: React.FC = () => {
	const navigate = useNavigate();
	const handlingNext = () => {
		navigate('/');
	};
	return (
		<SDone>
			<h3 className='email-title'>🥳 회원가입이 되었습니다. 🥳</h3>
			<button type='button' className='btn-next' onClick={handlingNext}>
				완료
			</button>
		</SDone>
	);
};

export default Done;

const SDone = styled.div`
	position: relative;
	flex: 1 0 100%;
	padding-top: 18px;
	border-top: 4px solid rgb(244, 244, 244);

	.email-title {
		margin: 50px 0 20px;
		height: 150px;
		font-size: 30px;
		font-weight: 500;
		line-height: 28px;
		white-space: pre-wrap;
	}

	.btn-next {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 40px;
		min-height: 25px;
		width: 100%;
		height: 52px;
		background: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
		font-size: 14px;
		font-weight: 700;
	}
`;
