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
		var SubMessageBox = React.createClass({
			render : function(){
				return (
					<div>
						<div>{this.props.str}</div>
						<div>{this.props.aabb}</div>
					</div>
				);
			}
		});
		var MessageBox = React.createClass({
			render : function(){
				var str1 = '123';
				var aa = 'abcd';
			 	return (
			 		<SubMessageBox str={str1} aabb={aa}/>
			 	);
			}
		});
		ReactDOM.render(
			<MessageBox/>,
			document.getElementById('app')
		);

	</script>
</body>
</html>

















