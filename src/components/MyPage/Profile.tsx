import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const USER_ID = '123';

const Profile = () => {
	const [userData, setUserData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		setIsLoading(true);

	// 		try {
	// 			const res = await axios({
	// 				method: 'get',
	// 				url: `/v1/user/${USER_ID}`,
	// 				headers: '',
	// 				baseURL: 'http://ec2-43-200-191-31.ap-northeast-2.compute.amazonaws.com:8080/api',
	// 			});

	// 			console.log('ss');
	// 			setUserData(res.data);

	// 			setIsLoading(false);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};

	// 	fetchUser();
	// }, []);

	if (isLoading) return <>Loading</>;

	return (
		<ProfileWrapper>
			<h3>회원정보</h3>
			<ul>
				<li>
					<h4>로그인 정보</h4>
					<ul>
						<li>
							<div>
								<span>아이디(이메일)</span>
								<p>dev@gmail.com</p>
							</div>
						</li>
						<li>
							<div>
								<span>비밀번호</span>
								<p>********</p>
							</div>
						</li>
					</ul>
				</li>

				<li>
					<h4>회원 정보</h4>
					<ul>
						<li>
							<div>
								<span>성명</span>
								<p>임빛나</p>
							</div>
						</li>
						<li>
							<div>
								<span>연락처</span>
								<p>010-0001-0001</p>
							</div>
						</li>
						<li>
							<div>
								<span>생일</span>
								<p>2013년 8월 30일</p>
							</div>
						</li>
						<li>
							<div>
								<span>성별</span>
								<p>여</p>
							</div>
						</li>
						<li>
							<div>
								<span>주소정보</span>
								<p>서울특별시 가나다구</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</ProfileWrapper>
	);
};

const ProfileWrapper = styled.div`
	h3 {
		position: relative;
		padding-bottom: 10px;
		font-size: 22px;
		color: #000;
		line-height: 30px;
		font-weight: 500;
		text-align: left;
	}

	> ul {
		display: flex;
		flex-direction: column;
		text-align: left;

		> li {
			border-top: 4px solid #000;
			padding: 28px 0 35px;

			ul {
				padding: 20px 0 40px;

				li {
					max-width: 360px;
					margin-bottom: 16px;

					div {
						display: flex;
						align-items: center;
						color: #303033;
						font-size: 14px;
						line-height: 30px;

						span:first-child {
							display: inline-block;
							width: 70px;
							padding-right: 20px;
						}
					}
				}
			}
		}
	}
`;

export default Profile;
