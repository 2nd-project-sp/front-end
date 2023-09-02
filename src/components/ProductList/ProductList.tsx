import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { ProductInterface, ProductLists } from '../../models/product';

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
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-template-rows: auto;
	grid-gap: 20px; /* 칸 사이의 간격 설정 */
	margin-top: 70px;
	@media screen and (max-width: 500px) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
		grid-gap: 0px; /* 칸 사이의 간격 설정 */
	}
`;

export default ProductList;
