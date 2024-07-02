import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="container mx-auto">
			<h2 className="text-3xl font-bold text-center my-4">
				Inventory<span className="text-cyan-500">Vision</span>
			</h2>
			<Outlet />
		</div>
	);
};

export default MainLayout;
