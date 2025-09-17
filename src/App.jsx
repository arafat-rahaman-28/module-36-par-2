import Users from "./users";
import Friedns from "./friends";
import Batsman from "./batsman";
import Counter from "./counter";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
	(res) => res.json()
);

const fetchFriends = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	return res.json();
};

function App() {
	const friendsPromise = fetchFriends();
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
			<Suspense fallback={<h3>FRIENDS ARE COMMING....</h3>}>
				<Friedns friendsPromise={friendsPromise}></Friedns>
			</Suspense>
			<Suspense fallback={<h3>LOADING...</h3>}>
				<Users fetchUsers={fetchUsers}></Users>
			</Suspense>
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
