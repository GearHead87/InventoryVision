import { useGetAllProductsQuery } from './redux/api/baseApi';

function App() {
	const { data, isLoading, isError } = useGetAllProductsQuery(undefined);
	return (
		<>
			<h2>InventoryVision</h2>
		</>
	);
}

export default App;
