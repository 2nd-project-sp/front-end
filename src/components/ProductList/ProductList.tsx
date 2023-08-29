import React from 'react';
import Product from './Product';
import styled from 'styled-components';
interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
}

interface ProductListsProps {
	products: Product[];
}

const ProductList: React.FC<ProductListsProps> = ({ products }: ProductListsProps) => {
	return (
		<Grid>
			{products.map((product: Product, index: number) => (
				<Product product={product} key={`product-${index}`} />
			))}
		</Grid>
	);
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px; /* 각 카드 사이의 간격 */
	margin-top: 70px;
`;

export default ProductList;
