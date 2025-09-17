import { use } from "react";
import Friend from "./friend";
export default function Friends({ friendsPromise }) {
	const friends = use(friendsPromise);
	console.log(friends);
	return (
		<div className="basic-card-styles">
			<h3>Friends: {friends.length}</h3>
			{friends.map((friend) => (
				<Friend friend={friend}></Friend>
			))}
		</div>
	);
}
