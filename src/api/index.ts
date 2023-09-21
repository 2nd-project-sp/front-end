import axios, { AxiosResponse } from 'axios';
import { ProductLists, ProductInterface } from '../../models/product';
axios.defaults.withCredentials = true;

export const fetchProducts = async () => {
	try {
		const response = await axios.get('http://15.164.128.162:8080/api/v1/products', {
			params: {
				page: 1,
				size: 20,
			},
		});

		return response.data.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
};
