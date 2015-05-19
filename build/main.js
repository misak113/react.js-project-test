var Greet = React.createClass({displayName: "Greet",
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
			React.createElement("div", null, 
				React.createElement("span", null,  man, React.createElement("br", null)), 
				React.createElement("input", {type: "text", value: man, onChange: this.handleChange})
			)
		);
	}
});

var Hello = React.createClass({displayName: "Hello",
	render: function () {
		var greets = [];
		for (var i = 0;i < 1000;i++) {
			greets.push(React.createElement(Greet, {name: "World"}));
		}
		return React.createElement("h1", null, 
			"Hello,", 
		greets
		)
	}
});

React.render(React.createElement(Hello, null), document.getElementById('example'));


