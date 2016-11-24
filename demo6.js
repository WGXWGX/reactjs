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
			getDefaultProps : function(){
				return {
					arr : []
				};
			},
			render : function(){
				var msg = [];
				this.props.arr.forEach(function(value, index){
					msg.push(<div key={index}>{value}</div>);
				});
				return (
					<div>{msg}</div>
				);
			}
		});
		var MessageBox = React.createClass({
			render : function(){
				var str1 = '123';
				var aa = 'abcd';
				var arr = [1, 2, 3];
			 	return (
			 		<SubMessageBox str={str1} aabb={aa} />
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

















