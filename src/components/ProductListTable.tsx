import { Button, Space, Table, TableProps } from 'antd';
import { useGetAllProductsQuery } from '../redux/api/baseApi';
import { Link } from 'react-router-dom';
import Loading from './Loading';

interface ProductDataType {
	id: 1;
	title: string;
	category: string;
	price: number;
}

const columns: TableProps<ProductDataType>['columns'] = [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Category',
		dataIndex: 'category',
		key: 'category',
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, render) => (
			<Space size="middle">
				<Link to={`/product/${render.id}`}>
					<Button>View Details</Button>
				</Link>
			</Space>
		),
	},
];

const ProductListTable = () => {
	const { data, isLoading } = useGetAllProductsQuery(undefined);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<div>
			<Table
				columns={columns}
				dataSource={data.products}
				className="max-w-screen-lg mx-auto"
			/>
			;{/* <Pagination align='center' defaultCurrent={1} total={50} /> */}
		</div>
	);
};

export default ProductListTable;
