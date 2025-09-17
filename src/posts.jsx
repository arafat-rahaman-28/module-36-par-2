import { use } from "react";
import Post from "./post";
export default function Posts({ postPromise }) {
	const posts = use(postPromise);
	console.log(posts);
	return (
		<div>
			<h3>All posts are here</h3>
			{posts.map((post) => (
				<Post post={post}></Post>
			))}
		</div>
	);
}
