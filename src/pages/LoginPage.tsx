import React from 'react';
import styled from 'styled-components';
import kakao from '../assets/kakao_login_medium_narrow.png';
import naver from '../assets/btnG_완성형.png';

const LoginPage: React.FC = () => {
	return (
		<SLogin>
			<div className='wrapper'>
				<h2 className='title'>로그인</h2>
				<div className='underline'>
					<form>
						<div className='form-box'>
							<input
								type='text'
								className='input-id'
								placeholder='아이디 (이메일)'
								autoCapitalize='none'
								name='username'
							/>
						</div>
						<div className='form-box'>
							<input
								type='password'
								className='input-password'
								placeholder='비밀번호'
								autoCapitalize='none'
								name='password'
							/>
						</div>
						<button className='btn-login' type='submit'>
							로그인하기
						</button>
					</form>
					<div className='container-sns_login'>
						<h3 className='title-sns'>SNS 계정으로 로그인하기</h3>
						<div className='container-sns'>
							<div className='sns'>
								<div className='btn-sns_kakao'>
									<img src={kakao} alt='카카오 로그인' />
								</div>
							</div>
							<div className='sns'>
								<div className='btn-sns_naver'>
									<img src={naver} alt='네이버 로그인' />
								</div>
							</div>
						</div>
					</div>
					<div className='container-signup'>간편 회원가입하기</div>
				</div>
			</div>
		</SLogin>
	);
};

export default LoginPage;

const SLogin = styled.div`
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
			margin-bottom: 20px;
			color: #000;
			font-size: 44px;
			font-weight: 500;
			text-align: center;
		}

		.underline {
			padding-top: 18px;
			border-top: 4px solid #000;

			form {
				padding: 0;
				margin: 0;

				.form-box {
					margin-top: 8px;
					margin-bottom: 8px;

					.input-id {
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

					.input-password {
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
				.btn-login {
					display: flex;
					justify-content: center;
					align-items: center;
					min-width: 40px;
					min-height: 25px;
					width: 100%;
					height: 56px;
					margin: 20px 0 0;
					background: #000;
					border-radius: 2px;
					color: #fff;
					font-size: 16px;
					line-height: 56px;
					font-weight: 600;
				}
			}
			.container-sns_login {
				margin: 35px 0;

				.title-sns {
					margin-bottom: 20px;
					font-weight: 500;
					font-size: 16px;
					text-align: center;
					line-height: 1.3;
					color: #000;
					margin: 0px;
					padding: 0px;
				}
				.container-sns {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 25px;

					.sns {
						.btn-sns_kakao {
							margin-top: 10px;

							img {
								height: 40px;
							}
						}
						.btn-sns_naver {
							margin-top: 10px;
							img {
								height: 40px;
							}
						}
					}
				}
			}
			.container-signup {
				display: block;
				height: 56px;
				border: 1px solid #5d5d5d;
				border-radius: 28px;
				box-sizing: border-box;
				font-weight: 600;
				font-size: 14px;
				color: #1d1d1d;
				text-align: center;
				line-height: 56px;
			}
		}
	}
`;
