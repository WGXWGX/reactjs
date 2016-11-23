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
		var CounterComponent = React.createClass({
			getInitialState : function(){
				return {
					count : 0
				};
			},
			clickHandler : function(e){
				// this.state.count = this.state.count + 1;
				// this.forceUpdate();
				this.setState({
					count : this.state.count + 1
				});

			},
			render : function(){
				return (
					<div>
						<button onClick={this.clickHandler}>点我加1</button>
						<p>次数为：{this.state.count}</p>
					</div>
				);
			}
		});	
		ReactDOM.render(
			<CounterComponent/>,
			document.getElementById('app')
		);
	

	</script>
</body>
</html>

















