import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	const handleAdd = () => {
		const newCount = count + 1;
		setCount(newCount);
	};

	const counterStyle = {
		border: "2px solid lightpink",
		margin: "12px",
		padding: "12px",
		borderRadius: "10px",
	};
	return (
		<div style={counterStyle}>
			<h3
				style={{
					marginTop: "0px",
				}}
			>
				Count: {count}
			</h3>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}
