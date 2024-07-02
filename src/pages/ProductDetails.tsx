import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../redux/api/baseApi';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const ProductDetails = () => {
	const { id } = useParams();
	console.log(id);
	const { data, isLoading, isError } = useGetProductDetailsQuery(id);
	console.log(data);
	return (
		<div>
			<Card
                className='max-w-lg mx-auto'
				cover={
					<img
						alt="example"
						src={data.images[0]}
					/>
				}
				actions={[
					<SettingOutlined key="setting" />,
					<EditOutlined key="edit" />,
					<EllipsisOutlined key="ellipsis" />,
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
