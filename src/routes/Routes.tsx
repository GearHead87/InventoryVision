import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Error from '../pages/Error';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/product/:id',
				element: <ProductDetails />,
			},
		],
	},
]);
