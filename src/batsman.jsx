import { useState } from "react";

export default function Batsman() {
	const [runs, setRuns] = useState(0);
	const [sixes, setSixes] = useState(0);
	const [fours, setFours] = useState(0);

	const handleSingles = () => {
		const updatedRuns = runs + 1;
		setRuns(updatedRuns);
	};

	const handleSix = () => {
		const updatedRuns = runs + 6;
		const updateSixes = sixes + 1;
		setSixes(updateSixes);
		setRuns(updatedRuns);
	};

	const handleFour = () => {
		const updatedRuns = runs + 4;
		const updateFours = fours + 1;
		setFours(updateFours);
		setRuns(updatedRuns);
	};

	return (
		<div>
			<p>Player: Tinker Bell</p>
			{runs >= 50 && <p>Half Century for Tinker Bell</p>}
			<h4>Runs: {runs}</h4>
			<h4>Sixs: {sixes}</h4>
			<h4>Fours: {fours}</h4>
			<button onClick={handleSingles}>Singles</button>
			<button onClick={handleFour}>Four</button>
			<button onClick={handleSix}>Six</button>
		</div>
	);
}
