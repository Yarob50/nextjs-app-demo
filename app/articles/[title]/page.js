export default function ShowArticlePage(props) {
	console.log(props);
	return (
		<div>
			<h1>Show Article</h1>
			<h1>{props.params.title}</h1>
		</div>
	);
}
