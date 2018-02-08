import React, { Component } from 'react';
import AddWayPoint from './AddWayPoint';
import '../reset.css';
import './Controls.css';

class Controls extends Component {
	render() {
		return (
			<div id="map-controls-container">
				<AddWayPoint />
			</div>
		);
	}
}

export default Controls;