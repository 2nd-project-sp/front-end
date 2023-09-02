import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Done: React.FC = () => {
	const navigate = useNavigate();
	const [contents, setContents] = useState<string>('');
	const handlingNext = () => {
		navigate('/');
	};
	const onChangeIntroduce = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContents(e.target.value);
	}, []);
	return (
		<SDone>
			<h3 className='done-title'>🥳 회원가입이 되었습니다. 🥳</h3>
			<div className='container-done-input'>
				<textarea
					maxLength={20}
					placeholder='간단한 자기소개를 해주세요! (선택)'
					autoCapitalize='none'
					className='done-input'
					value={contents}
					onChange={onChangeIntroduce}
				/>
				<div className='content-bottom'>
					<div className='current-number'>{contents.length}/20</div>
				</div>
			</div>
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

	.done-title {
		margin: 50px 0 50px;
		font-size: 30px;
		font-weight: 500;
		line-height: 28px;
		white-space: pre-wrap;
	}

	.container-done-input {
		margin-bottom: 40px;
		padding: 0;

		.done-input {
			border: 1px solid #d4d4d4;
			border-radius: 2px;
			display: block;
			width: 100%;
			height: 50px;
			padding: 0 14px;
			font-size: 14px;
			font-weight: 500;
			color: #1a1a1a;
			outline: none;
			text-size-adjust: none;
			appearance: none;
			resize: none;
		}
		.content-bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			.current-number {
				width: 100%;
				display: flex;
				justify-content: end;
				color: gray;
				cursor: default;
			}
		}
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
