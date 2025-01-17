import { Button, Modal, Form, Input, Select, InputNumber, message } from 'antd';
import {
	EditOutlined,
	LoadingOutlined,
	MinusCircleOutlined,
	PlusOutlined,
} from '@ant-design/icons';
import type { FormProps } from 'antd';
import { useState } from 'react';
import { useGetCategoryOption } from '../hooks/useGetCategoryOption';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';
import { IProduct, IUpdateProductValues, useUpdateProductMutation } from '../redux/api/baseApi';

interface ProductUpdateModelFormProps {
	data: IProduct | undefined;
}

const ProductUpadateModelForm: React.FC<ProductUpdateModelFormProps> = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { categoryOption } = useGetCategoryOption();
	const [updateProduct, { isLoading }] = useUpdateProductMutation();
	const [messageApi, contextHolder] = message.useMessage();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const successMessage = () => {
		messageApi.open({
			type: 'success',
			content: 'Product Info Updated',
		});
	};

	type FieldType = {
		title?: string;
		description?: string;
		brand?: string;
		category?: string;
		price?: string;
		reviews?: object;
	};

	type TReview = {
		rating: number;
		comment: string;
		date: string;
		reviewerName: string;
		reviewerEmail: string;
	};

	// Pre-fill the form with the initial reviews array
	const initialValues = {
		reviews: data?.reviews.map((review: TReview) => ({
			...review,
			date: moment(review.date),
		})),
	};

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		// Add current date to new reviews

		const updatedValues: IUpdateProductValues = {
			...data,
			...values,
			price: parseInt(values.price ?? "0"),
			reviews: (values.reviews as Array<TReview>).map(
				(review: TReview, index: number): TReview => {
					const existingReview = data?.reviews[index];
					return {
						...review,
						date: existingReview ? existingReview.date : moment().toISOString(),
					};
				}
			),
		};
		console.log('Updated Value =>', updatedValues);
		if (data?.id) {
			updateProduct({ id: data?.id, updatedValues });
		}
		successMessage();
	};

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			{contextHolder}
			<Button type="primary" onClick={showModal}>
				<EditOutlined key="edit" style={{ fontSize: '24px' }} />
				Edit Product
			</Button>
			<Modal
				title="Product Update"
				open={isModalOpen}
				okText={'Done'}
				okButtonProps={{ hidden: true }}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={initialValues}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<FieldType>
						label="Title"
						name="title"
						initialValue={data?.title}
						rules={[{ required: true, message: 'Please input title!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<FieldType>
						label="Description"
						name="description"
						initialValue={data?.description}
						rules={[{ required: true, message: 'Please input description!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<FieldType>
						label="Brand"
						name="brand"
						initialValue={data?.brand}
						rules={[{ required: true, message: 'Please input brand!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<FieldType>
						label="Category"
						name="category"
						initialValue={data?.category}
						rules={[{ required: true, message: 'Please input category!' }]}
					>
						{/* <Input /> */}
						<Select options={categoryOption} />
					</Form.Item>

					<Form.Item<FieldType>
						label="Price"
						name="price"
						initialValue={data?.price}
						rules={[{ required: true, message: 'Please input price!' }]}
					>
						<Input />
					</Form.Item>

					<Form.List name="reviews">
						{(fields, { add, remove }) => (
							<div>
								{fields.map(({ key, name, ...restField }) => (
									<div
										key={key}
										style={{
											display: 'flex',
											flexDirection: 'column',
											marginBottom: 8,
											maxWidth: 600,
										}}
										className="border-2 p-4 "
										// align="center"
									>
										<Form.Item
											{...restField}
											label="rating"
											name={[name, 'rating']}
											rules={[{ required: true, message: 'Missing rating' }]}
										>
											<InputNumber min={1} max={5} placeholder="Rating" />
										</Form.Item>
										<Form.Item
											{...restField}
											label="comment"
											name={[name, 'comment']}
											rules={[{ required: true, message: 'Missing comment' }]}
										>
											<TextArea rows={1} placeholder="Comment" />
										</Form.Item>
										<Form.Item
											{...restField}
											label="Reviewer Name"
											name={[name, 'reviewerName']}
											rules={[
												{
													required: true,
													message: 'Missing reviewer name',
												},
											]}
										>
											<Input placeholder="Reviewer Name" />
										</Form.Item>
										<Form.Item
											{...restField}
											label="Reviewer Email"
											name={[name, 'reviewerEmail']}
											rules={[
												{
													required: true,
													message: 'Missing reviewer email',
												},
											]}
										>
											<Input placeholder="Reviewer Email" />
										</Form.Item>
										<MinusCircleOutlined
											onClick={() => remove(name)}
											className="justify-end"
										/>
									</div>
								))}
								<Form.Item>
									<Button
										type="dashed"
										onClick={() => add()}
										block
										icon={<PlusOutlined />}
									>
										Add Review
									</Button>
								</Form.Item>
							</div>
						)}
					</Form.List>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							{isLoading ? (
								<span>
									<LoadingOutlined /> Loading...{' '}
								</span>
							) : (
								'Submit'
							)}
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default ProductUpadateModelForm;
