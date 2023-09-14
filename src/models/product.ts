export interface ProductInterface {

	isNew: boolean;
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	subCategoryId: string;
	categoryId: string;
	thumbnail: string;
	rating: number;
	quantity: number;
	option: string;
	name: string;
	brandId: string;
	discountRate: number;
	delivaryPrice: number;

}

export interface ProductLists {
	products: ProductInterface[];
}
