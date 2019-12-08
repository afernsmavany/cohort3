import React from 'react';

class MyComp extends React.Component {

	render() {
			return (
				<div>
					<h1>Hello World from MyComp {this.props.whatToSay} {this.onPushMe}</h1>
				</div>
			)
		}
}

export default MyComp;