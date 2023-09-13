import axios from 'axios';

axios.defaults.withCredentials = true;

export const fetchProducts = async () => {
	const response = await axios.get('https://dummyjson.com/products');
	return response.data;
};
