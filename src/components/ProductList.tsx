import Product from '../components/Product';
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
			{products.map((product, index) => (
				<Product product={product} key={`product-${index}`} />
			))}
		</Grid>
	);
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px; /* 각 카드 사이의 간격 */
	margin-top: 20px;
`;

export default ProductList;
