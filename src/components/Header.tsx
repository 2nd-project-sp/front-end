import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { PiHandbagBold } from 'react-icons/pi';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/loginSlice';
import { RootState } from '../store/store';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLogin = useSelector((state: RootState) => state.login.isLogin);
	const checkLogout = useSelector((state: RootState) => state.token);
	console.log(checkLogout.token);
	const myHandler = () => {
		if (isLogin) {
			navigate('/my');
		} else {
			navigate('/login');
		}
	};
	const mybagHandler = () => {
		if (isLogin) {
			navigate('/mybag');
		} else {
			navigate('/login');
		}
	};
	const loginHandler = async () => {
		// if (isLogin) {
		// 	dispatch(logout(false));
		// } else {
		navigate('/login');
	};
	const logoutHandler = async () => {
		const res = await fetch(
			'http://ec2-43-200-191-31.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/logout',
			{
				method: 'POST',
				headers: {
					'ACCESS-TOKEN': `${checkLogout.token}`,
				},
				body: {} as any,
			}
		);
		const json = await res.json();
		console.log(json);
	};
	const homeHandler = () => {
		navigate('/');
	};
	return (
		<SHeader>
			<div className='header-wrapper'>
				<div className='header-navigation'>
					<div>
						<div className='temp-logo' onClick={homeHandler}>
							29cm
						</div>
					</div>
					<div className='navigation'>
						<div className='home' onClick={homeHandler}>
							Home
						</div>
					</div>
				</div>
				<div className='header-menu'>
					<div className='menu-container'>
						<div className='mypage' onClick={myHandler}>
							<div className='menu-icon'>
								<BsFillPersonFill />
							</div>
							<span>마이페이지</span>
						</div>
						<div className='mybag' onClick={mybagHandler}>
							<div className='menu-icon'>
								<PiHandbagBold />
							</div>
							<span>장바구니</span>
						</div>
						<div className='login' onClick={loginHandler}>
							<div className='menu-icon'>
								<RiLoginBoxLine />
							</div>
							<span>{isLogin ? '로그아웃' : '로그인'}</span>
						</div>
						<div>
							<button style={{ color: 'white' }} onClick={logoutHandler}>
								로그아웃
							</button>
						</div>
					</div>
				</div>
			</div>
		</SHeader>
	);
};

export default Header;

const SHeader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	min-width: 1000px;
	z-index: 100;
	height: 80px;
	background: #000;
	color: #fff;

	.header-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.header-navigation {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			height: 100%;

			.temp-logo {
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 50px;
				margin-top: 10px;
				margin-left: 30px;
				margin-right: 70px;
				cursor: pointer;
			}
			.navigation {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.home {
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					margin-top: 30px;
					font-size: 20px;
					cursor: pointer;
				}
			}
		}

		.menu-container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;
			margin-right: 50px;
			margin-top: 10px;

			.mypage {
				display: flex;
				flex-direction: column;
				margin-right: 10px;
				align-items: center;
				cursor: pointer;
				span {
					font-size: 10px;
				}
			}
			.mybag {
				display: flex;
				flex-direction: column;
				margin-right: 10px;
				align-items: center;
				cursor: pointer;
				span {
					font-size: 10px;
				}
			}
			.login {
				display: flex;
				flex-direction: column;
				margin-right: 10px;
				align-items: center;
				cursor: pointer;
				span {
					font-size: 10px;
					color: white;
				}
			}
			.menu-icon {
				font-size: 30px;
			}
		}
	}
`;
