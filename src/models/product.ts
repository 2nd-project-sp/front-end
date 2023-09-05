export interface ProductInterface {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	thumbnail: string;
	rating: number;
	quantity:number;
}

export interface ProductLists {
	products: ProductInterface[];
}
