
export interface ProductInterface {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
}

export interface ProductLists {
	products: ProductInterface[];
}