export default function Post({ post }) {
	return (
		<div className="post-card">
			<p>{post.body}</p>
		</div>
	);
}
