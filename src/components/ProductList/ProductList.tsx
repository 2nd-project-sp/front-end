import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { ProductInterface, ProductLists } from '../models/product'


const ProductList: React.FC<ProductLists> = ({ products }: ProductLists) => {
	return (
		<Grid>
			{products.map((product: ProductInterface, index: number) => (
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
