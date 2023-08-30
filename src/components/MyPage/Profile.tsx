import React from 'react';
import styled from 'styled-components';

const Profile = () => {
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
								<p>ign3333@naver.com</p>
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
								<p>010-4647-6443</p>
							</div>
						</li>
						<li>
							<div>
								<span>생일</span>
								<p>1997년 05월 03일</p>
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
								<p>서울특별시 서초구</p>
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
