import React from 'react';
import styled from 'styled-components';

const PhoneNum = ({ step, setStep }) => {
	const handlingNext = () => {
		// 유효성 검사 후
		setStep(step + 1);
	};
	const autoHyphen2 = (target: any) => {
		return (target.value = target.value
			.replace(/[^0-9]/g, '')
			.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
			.replace(/(\-{1,2})$/g, ''));
	};
	return (
		<SPhoneNum>
			<h3 className='email-title'>
				전화번호를 입력해주세요.
				<br />
				성별을 선택해주세요.
			</h3>
			<div className='container-email-input'>
				<input
					type='text'
					placeholder='전화번호 입력'
					autoCapitalize='none'
					className='email-input'
				/>
				<div className='select-gender'>
					<input type='radio' id='select1' name='gender' />
					<label htmlFor='select1'>남성</label>
					<input type='radio' id='select2' name='gender' />
					<label htmlFor='select2'>여성</label>
				</div>
			</div>
			<button type='button' className='btn-next' onClick={handlingNext}>
				다음
			</button>
		</SPhoneNum>
	);
};

export default PhoneNum;

const SPhoneNum = styled.div`
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

		.select-gender {
			margin-top: 20px;
		}

		.select-gender input[type='radio'] {
			display: none;
		}

		.select-gender input[type='radio'] + label {
			display: inline-block;
			cursor: pointer;
			height: 48px;
			width: 90px;
			border: 1px solid #d4d4d4;
			line-height: 48px;
			text-align: center;
			font-weight: 500;
			font-size: 13px;
		}

		.select-gender input[type='radio'] + label {
			background: #fff;
			color: #1a1a1a;
		}

		.select-gender input[type='radio']:checked + label {
			background: #333;
			color: #fff;
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
