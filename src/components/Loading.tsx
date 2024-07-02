const Spinner = ({ size = 24 }) => {
	const radius = size / 2 - 2; // Calculate radius based on size

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g className="spinner_V8m1">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="none"
					strokeWidth={size / 12} // Adjust stroke width relative to size
					stroke="#000" // Set stroke color to white
				></circle>
			</g>
		</svg>
	);
};

const Loading = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex justify-center items-center gap-2">
				<Spinner size={24} /> {/* Adjust size as needed */}
				<h2 className="text-2xl">Loading...</h2>
			</div>
		</div>
	);
};

export default Loading;
