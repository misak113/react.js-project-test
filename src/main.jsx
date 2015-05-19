var Greet = React.createClass({
	getInitialState: function () {
		return {
			man: null
		};
	},
	handleChange: function (event) {
		this.setState({man: event.target.value});
	},
	render: function () {
		var man = this.state.man || this.props.name;
		return (
			<div>
				<span>{ man }<br/></span>
				<input type="text" value={man} onChange={this.handleChange} />
			</div>
		);
	}
});

var Hello = React.createClass({
	render: function () {
		var greets = [];
		for (var i = 0;i < 1000;i++) {
			greets.push(<Greet name="World"/>);
		}
		return <h1>
			Hello,
		{greets}
		</h1>
	}
});

React.render(<Hello/>, document.getElementById('example'));


