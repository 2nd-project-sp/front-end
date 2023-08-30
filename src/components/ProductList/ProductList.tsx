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
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 칸 크기 설정 */
	grid-template-rows: auto; /* 칸 높이 설정 */
	grid-gap: 20px; /* 칸 사이의 간격 설정 */
	margin-top: 70px;
`;

export default ProductList;
