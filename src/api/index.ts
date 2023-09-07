import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const check = useSelector((state: RootState) => state.signup);

export const fetchProducts = async () => {
	const response = await axios.get('https://dummyjson.com/products');
	return response.data;
};

// const { isLoading, isError } = useQuery({
//   queryKey: ['testProducts'],
//   queryFn: fetchProducts,
//   staleTime: 3000,
//   cacheTime: 60 * 1000,
//   onSuccess: fetchedData => {
//     if (!isError) {
//       dispatch(setProducts(fetchedData.products));
//     }
//   },
// });

const fetchSignup = async () => {
	const response = await axios.post(
		'http://ec2-43-200-191-31.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/sign',
		JSON.stringify(check),
		{ headers: { 'Content-Type': `application/json` } }
	);
};
