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
	saleStartDate: Date | null; // Use Date | null if it can be null
	saleEndDate: Date | null; // Use Date | null if it can be null
}

export interface ProductLists {
	products: ProductInterface[];
}
