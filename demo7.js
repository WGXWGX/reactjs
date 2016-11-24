<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="app"></div>

	<script src="react-0.14.7/build/react-with-addons.js"></script>
	<script src="react-0.14.7/build/react-dom.js"></script>
	<script src="react-0.14.7/browser.js"></script>

	<script type="text/babel">
		var App = React.createClass({
			mixins : [React.addons.LinkedStateMixin],
			getInitialState : function(){
				return {
					message : ''
				};
			},
			render : function(){
				return (
					<div>
						<h1>{this.state.message}</h1>
						<input type="text" valueLink={this.linkState('message')} />
					</div>
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
