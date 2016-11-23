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

	<script type="text/babel">
		var Messagebox = React.createClass({
			render : function(){
				return (
					<div>
						<h1>hhhhhhh</h1>
						<h2>2222222</h2>
						<SubMessageBox/>
					</div>
				);
			}
		});
		var SubMessageBox = React.createClass({
			render : function(){
				return (
					<div>SubMessageBox</div>
				);
			}
		});

		ReactDOM.render(
			<div>
				<Messagebox/>
			</div>,
			document.getElementById('app')
		);



	</script>

</body>
</html>










