import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="container mx-auto">
			<h2 className="text-3xl font-bold text-center my-4">
				<Link to={'/'}>
					Inventory<span className="text-cyan-500">Vision</span>
				</Link>
			</h2>
			<Outlet />
		</div>
	);
};

export default MainLayout;
