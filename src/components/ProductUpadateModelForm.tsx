import { Button, Modal } from 'antd';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';

const ProductUpadateModelForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button type="primary" onClick={showModal}>
            <EditOutlined key="edit" style={{ fontSize: '24px' }} />
            Edit Product
			</Button>
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export default ProductUpadateModelForm;
