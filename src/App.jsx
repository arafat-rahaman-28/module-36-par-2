import Batsman from "./batsman";
import Counter from "./counter";
import "./App.css";

function App() {
	function handleClick() {
		alert("Click Me 1 Button Was Clicked");
	}
	const handleClick3 = () => {
		alert("Click Me 3 Button Was Clicked");
	};
	const handleAddFive = (number) => {
		const newNumber = number + 5;
		alert(newNumber);
	};
	return (
		<>
			<h1>React Core Concepts</h1>
			<Batsman></Batsman>
			<Counter></Counter>
			<button className="button-style" onClick={handleClick}>
				Click Me 1
			</button>
			<button
				className="button-style"
				onClick={function handleClick2() {
					alert("Click Me 2 Button Was Clicked");
				}}
			>
				Click Me 2
			</button>
			<button className="button-style" onClick={handleClick3}>
				Click Me 3
			</button>
			<button onClick={() => handleAddFive(34)}>Add 5</button>
		</>
	);
}

export default App;
