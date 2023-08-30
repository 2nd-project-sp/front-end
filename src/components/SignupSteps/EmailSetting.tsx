import React from 'react';
import styled from 'styled-components';
import { ISteps } from '../../models/steps';

const EmailSetting: React.FC<ISteps> = ({ step, setStep }: ISteps) => {
	const handlingNext = () => {
		// 유효성 검사 후
		setStep(step + 1);
	};
	return (
		<SEmailSetting>
			<h3 className='email-title'>
				로그인에 사용할
				<br />
				아이디를 입력해주세요.
			</h3>
			<div className='container-email-input'>
				<input
					type='text'
					placeholder='아이디 (이메일) 입력'
					autoCapitalize='none'
					className='email-input'
				/>
			</div>
			<button type='button' className='btn-next' onClick={handlingNext}>
				다음
			</button>
		</SEmailSetting>
	);
};

export default EmailSetting;

const SEmailSetting = styled.div`
	position: relative;
	flex: 1 0 100%;
	padding-top: 18px;
	border-top: 4px solid rgb(244, 244, 244);

	.email-title {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 500;
		line-height: 28px;
		white-space: pre-wrap;
	}

	.container-email-input {
		margin-bottom: 40px;
		padding: 0;

		.email-input {
			border: 1px solid #d4d4d4;
			border-radius: 2px;
			display: block;
			width: 100%;
			height: 48px;
			padding: 0 14px;
			font-size: 14px;
			font-weight: 500;
			color: #1a1a1a;
			outline: none;
			text-size-adjust: none;
			appearance: none;
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
