import { createSlice } from '@reduxjs/toolkit';

interface userInfo {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	sex: string;
	profileImgUrl: string;
	introduce: string;
	mainAddress: string;
	subAddress: string;
}

const initialState = {
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	sex: '',
	profileImgUrl: 'https://i.stack.imgur.com/frlIf.png',
	introduce: '',
	mainAddress: '',
	subAddress: '',
} as userInfo;

const userSlice = createSlice({
	name: 'userinfo',
	initialState,
	reducers: {
		saveUser(state, action) {
			// 이전의 상태를 보존하지 않으면서 새로운 상태 적용
			return { ...action.payload };
		},
	},
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
