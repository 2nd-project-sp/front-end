import { getData } from '../store/productsSlice';
import axios from 'axios';

// No need to call useDispatch outside of a functional component

export const fetchProducts = () => async dispatch => {
	try {
		const response = await axios.get('http://15.164.128.162:8080/api/v1/products/1');

		dispatch(getData(response.data));

		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
};
