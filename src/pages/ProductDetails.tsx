import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../redux/api/baseApi';

import { Avatar, Card } from 'antd';
import ProductUpadateModelForm from '../components/ProductUpadateModelForm';
import Loading from '../components/Loading';

const { Meta } = Card;

const ProductDetails = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetProductDetailsQuery(id);
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
						src={data.images[0]}
					/>
				}
				actions={[
					<ProductUpadateModelForm data={data} />,
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
