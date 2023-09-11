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
	option:string;
}

export interface ProductLists {
	products: ProductInterface[];
}
