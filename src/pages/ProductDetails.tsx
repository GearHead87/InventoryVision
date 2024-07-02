import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../redux/api/baseApi';

import { Avatar, Card } from 'antd';
import ProductUpadateModelForm from '../components/ProductUpadateModelForm';

const { Meta } = Card;

const ProductDetails = () => {
	const { id } = useParams();
	const { data, isLoading, isError } = useGetProductDetailsQuery(id);
	if (isLoading) {
		return <p>Loading....</p>;
	}
	console.log(data);
	return (
		<div>
			<Card
				className="max-w-lg mx-auto"
				cover={
					<img
						className="max-w-xs max-h-56 object-scale-down mx-auto"
						alt="example"
						src={data.images[0]}
					/>
				}
				actions={[
					// <div className="flex items-center justify-center gap-4 hover:bg-cyan-100 mx-auto px-6 py-2 w-fit rounded-lg">
					// 	<p className="text-lg font-bold">Edit</p>
					// </div>,
					<ProductUpadateModelForm />,
				]}
			>
				<Meta
					avatar={<Avatar src={data.images[0]} />}
					title={data.title}
					description={data.description}
				/>
			</Card>
		</div>
	);
};

export default ProductDetails;
