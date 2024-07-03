import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../redux/api/baseApi';

import { Avatar, Card, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import ProductUpadateModelForm from '../components/ProductUpadateModelForm';
import Loading from '../components/Loading';

const { Meta } = Card;

const ProductDetails = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetProductDetailsQuery(parseInt(id ?? '0'));

	const items: DescriptionsProps['items'] = [
		{
			key: '1',
			label: 'Brand',
			children: data?.brand,
		},
		{
			key: '2',
			label: 'Category',
			children: data?.category,
		},
		{
			key: '3',
			label: 'Stock',
			children: data?.stock,
		},
		{
			key: '4',
			label: 'Price',
			children: data?.price,
		},
		{
			key: '5',
			label: 'Warranty',
			children: data?.warrantyInformation,
		},
		{
			key: '6',
			label: 'Shipping',
			children: data?.shippingInformation,
		},
		{
			key: '7',
			label: 'Availability',
			children: data?.availabilityStatus,
		},
		{
			key: '8',
			label: 'Return Policy',
			children: data?.returnPolicy,
		},
	];

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<Card
				className="max-w-lg mx-auto"
				cover={
					<img
						className="max-w-xs max-h-56 object-scale-down mx-auto"
						alt="example"
						src={data?.images[0]}
					/>
				}
				actions={[<ProductUpadateModelForm data={data} />]}
			>
				<Meta
					avatar={<Avatar src={data?.images[0]} />}
					title={data?.title}
					description={data?.description}
				/>
				<Descriptions title="Product Info" items={items} className="mt-4" />
			</Card>
		</div>
	);
};

export default ProductDetails;
