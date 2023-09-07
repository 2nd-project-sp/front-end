import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const fetchProducts = async () => {
	const response = await axios.get('https://dummyjson.com/products');
	return response.data;
};

// 회원가입 API 호출
const fetchSignup = async () => {
	const check = useSelector((state: RootState) => state.signup);
	await axios
		.post(
			'http://ec2-43-200-191-31.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/sign',
			JSON.stringify(check),
			{ headers: { 'Content-Type': `application/json` } }
		)
		.then(function (response) {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const useSignupQuery = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['signup'],
		queryFn: fetchSignup,
		staleTime: 3000,
		cacheTime: 60 * 1000,
	});
	return { data, isLoading, isError };
};

// 이메일 중복 확인 API 호출
const fetchEmail = async () => {
	const email = useSelector((state: RootState) => state.signup.email);
	const response = await axios.get(
		`http://ec2-43-200-191-31.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/sign/${email}/exists`
	);
	return response.data;
};

export const useEmailQuery = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['email'],
		queryFn: fetchEmail,
		cacheTime: 60 * 1000,
	});
	return { data, isLoading, isError };
};
