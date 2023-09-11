import React, { useState } from 'react';
import styled from 'styled-components';
import {
	ProgressBar,
	EmailSetting,
	PasswordSetting,
	PhoneNum,
	ProfilePic,
	Done,
	AddressSetting,
} from '../components';

const SignUpPage: React.FC = () => {
	const [step, setStep] = useState(0);
	const stepComponent = {
		0: <EmailSetting step={step} setStep={setStep} />,
		1: <PasswordSetting step={step} setStep={setStep} />,
		2: <PhoneNum step={step} setStep={setStep} />,
		3: <AddressSetting step={step} setStep={setStep} />,
		4: <Done />,
	};
	return (
		<SSignUp>
			<div className='wrapper'>
				<h2 className='title'>간편가입</h2>
				<div className='container'>
					<ProgressBar step={step} />
					<div>{stepComponent[step]}</div>
				</div>
			</div>
		</SSignUp>
	);
};

export default SignUpPage;

const SSignUp = styled.div`
	max-width: 1920px;
	width: 100%;
	background-color: #fff;
	height: 100vh;
	margin: 0 auto;
	color: #000;

	.wrapper {
		padding: 43px 0 50px;
		max-width: 400px;
		margin: 0 auto;
		margin-top: 80px;

		.title {
			margin-bottom: 34px;
			color: rgb(0, 0, 0);
			font-size: 44px;
			font-weight: 600;
			text-align: center;
		}

		.container {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: calc(100vh - 100px);
		}
	}
`;
