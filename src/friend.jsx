export default function Friend({ friend }) {
	console.log(friend);
	const { name, email, phone } = friend;
	return (
		<div className="basic-card-styles">
			<h5 style={{ textAlign: "left" }}>Name: {name}</h5>
			<p style={{ textAlign: "left" }}>Email: {email}</p>
			<p style={{ textAlign: "left" }}>Phone: {phone}</p>
		</div>
	);
}
