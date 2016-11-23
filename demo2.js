<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="app"></div>
	<script src="react-0.14.7/build/react.js"></script>
	<script src="react-0.14.7/build/react-dom.js"></script>
	<script src="react-0.14.7/browser.js"></script>
	<!-- JSXTransformer.js -->

	<script type="text/babel">
		ReactDOM.render(
			<h1>Hello World!
				<div>aaa
					<p>ppp</p>
				</div>
			</h1>,
			document.getElementById('app')
		);
	</script>

</body>
</html>
