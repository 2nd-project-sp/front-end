import axios from 'axios';

export const fetchCategories = async () => {
	try {
		const response = await axios.get(
			'http://15.164.128.162:8080/api/v1/seller/products/categories'
		);
		if (response.data.status === 'success') {
			const categoryList = response.data.data.categoryList;
			return categoryList;
		} else {
			console.error('카테고리 목록 가져오기 실패');
		}
	} catch (error) {
		console.error('API Error:', error);
	}
};

export const fetchSubCategories = async (categoryId: number) => {
	try {
		const response = await axios.get(
			`http://15.164.128.162:8080/api/v1/seller/products/subcategory?categoryId=${categoryId}`
		);
		if (response.data.status === 'success') {
			const subCategoryList = response.data.data.subCategoryList;
			return subCategoryList;
		} else {
			console.error('서브카테고리 목록 가져오기 실패');
		}
	} catch (error) {
		console.error('API Error:', error);
	}
};
