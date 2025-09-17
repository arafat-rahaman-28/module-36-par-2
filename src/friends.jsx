import { use } from "react";
export default function Friedns({ friendsPromise }) {
	const friends = use(friendsPromise);
	console.log(friends);
	return (
		<div className="basic-card-styles">
			<h3>Friends: {friends.length}</h3>
		</div>
	);
}
