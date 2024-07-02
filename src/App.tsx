import ProductListTable from "./components/ProductListTable";

function App() {
	return (
		<div className="container mx-auto">
			<h2 className="text-3xl font-bold text-center my-4">Inventory<span className="text-cyan-500">Vision</span></h2>
			<ProductListTable></ProductListTable>
		</div>
	);
}

export default App;
