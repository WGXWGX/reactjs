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
		var App = React.createClass({
			clickHandler : function(e){
				console.log(this.refs.btn);
			},
			render : function(){
				return (
					<button onClick={this.clickHandler} ref='btn'>点我</button>
				);
			}
		});
		ReactDOM.render(
			<App/>,
			document.getElementById('app')
		);
	</script>
</body>
</html>
