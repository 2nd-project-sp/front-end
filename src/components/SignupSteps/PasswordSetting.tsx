import React from 'react';
import styled from 'styled-components';

const PasswordSetting = ({ step, setStep }) => {
	const handlingNext = () => {
		// 유효성 검사 후
		setStep(step + 1);
	};
	return (
		<SPasswordSetting>
			<h3 className='pw-title'>비밀번호를 입력해주세요.</h3>
			<div className='container-pw-input'>
				<input
					type='password'
					placeholder='비밀번호 입력'
					autoCapitalize='none'
					className='pw-input'
				/>
				<p className='validation-check'>
					<span className='check'>대소문자</span>
					<span className='check'>숫자</span>
					<span className='check'>특수문자</span>
					<span className='check'>8-20자 이내</span>
				</p>
				<input
					type='password'
					placeholder='비밀번호 확인'
					autoCapitalize='none'
					className='pw-input'
				/>
				<p className='validation-check'>
					<span className='check'>비밀번호 일치</span>
				</p>
			</div>
			<button type='button' className='btn-next' onClick={handlingNext}>
				다음
			</button>
		</SPasswordSetting>
	);
};

export default PasswordSetting;

const SPasswordSetting = styled.div`
	position: relative;
	flex: 1 0 100%;
	padding-top: 18px;
	border-top: 4px solid rgb(244, 244, 244);

	.pw-title {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 500;
		line-height: 28px;
		white-space: pre-wrap;
	}

	.container-pw-input {
		.pw-input {
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

		.validation-check {
			display: flex;
			align-items: center;
			height: 40px;
			font-size: 12px;
			line-height: 20px;

			.check {
				position: relative;
				padding-right: 30px;
				color: rgb(196, 196, 196);
			}
			.check::after {
				position: absolute;
				top: 2px;
				right: 10px;
				width: 10px;
				height: 6px;
				border-bottom: 1px solid rgb(196, 196, 196);
				border-left: 1px solid rgb(196, 196, 196);
				border-top-color: rgb(196, 196, 196);
				border-right-color: rgb(196, 196, 196);
				transform: rotate(-45deg);
				content: '';
				box-sizing: content-box;
			}
			.check-valid {
				position: relative;
				padding-right: 25px;
				color: rgb(55, 95, 255);
			}
			.check-valid::after {
				position: absolute;
				top: 2px;
				right: 10px;
				width: 10px;
				height: 6px;
				border-bottom: 1px solid rgb(55, 95, 255);
				border-left: 1px solid rgb(55, 95, 255);
				border-top-color: rgb(55, 95, 255);
				border-right-color: rgb(55, 95, 255);
				transform: rotate(-45deg);
				content: '';
				box-sizing: content-box;
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
