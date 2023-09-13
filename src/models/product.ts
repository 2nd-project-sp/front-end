export interface ProductInterface {
	product: {
		id: number;
		name: string;
		price: number;
		description: string;
		discountRate: number;
		isDiscount: boolean;
		isNew: boolean;
		deliveryPrice: string;
		saleStartDate: string;
		saleEndDate: string;
		imageUrl: string;
		imageType: string;
	};
}

export interface ProductLists {
	products: ProductInterface[];
}
