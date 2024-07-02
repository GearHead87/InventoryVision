import { Button, Space, Table, TableProps } from 'antd';
import { useGetAllProductsQuery } from '../redux/api/baseApi';


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
		render: () => (
			<Space size="middle">
				<Button >View Details</Button>
			</Space>
		),
	},
];


const ProductListTable = () => {
	const { data, isLoading } = useGetAllProductsQuery(undefined);

    if(isLoading) {
        return <p>Loading ......</p>
    }
	return (
		<div>
			<Table columns={columns} dataSource={data.products}  />;
            {/* <Pagination align='center' defaultCurrent={1} total={50} /> */}
		</div>
	);
};

export default ProductListTable;
