import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ProfilePic = ({ step, setStep }) => {
	const imgRef = useRef(null);
	const [imgFile, setImgFile] = useState('');
	const readImg = () => {
		if (imgRef.current !== undefined && imgRef.current !== null) {
			const file = imgRef.current.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImgFile(reader?.result);
			};
		} else return;
	};

	return (
		<SProfilePic>
			<h3 className='profile-title'>프로필 사진을 선택해주세요.</h3>
			<div className='container-pic-input'>
				<input
					type='file'
					accept='image/*'
					placeholder='사진을 선택해주세요'
					onChange={readImg}
					ref={imgRef}
				/>
			</div>
		</SProfilePic>
	);
};

export default ProfilePic;

const SProfilePic = styled.div`
	position: relative;
	flex: 1 0 100%;
	padding-top: 18px;
	border-top: 4px solid rgb(244, 244, 244);

	.profile-title {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 500;
		line-height: 28px;
		white-space: pre-wrap;
	}
`;
