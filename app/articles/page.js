import Link from "next/link";

export default function ArticlesPage() {
	return (
		<div>
			<h3>Articles Page</h3>

			<Link href="/posts">
				<button>Take me to the posts page</button>
			</Link>
		</div>
	);
}
