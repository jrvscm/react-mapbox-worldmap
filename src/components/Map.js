import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import MarkerLayer from './MarkerLayer';
import Controls from './Controls';
import '../reset.css';

class Map extends Component {

	render() {
	const Map = ReactMapboxGl({
		accessToken: "pk.eyJ1IjoiY2hyaXNqYXJ2aXNkZXYiLCJhIjoiY2pkYjY1eTE3NmdodTJ4bjI1MzhhMGQ0NyJ9.94u5c1kaGse7UvaEJPFIHw"
	})

	return (
		<div>
			<Map
				center={[-110.762428, 43.479929]}
  				style={"mapbox://styles/mapbox/dark-v9"}
  				zoom={[15]}
  				containerStyle={{
    			height: "100vh",
    			width: "100vw",
  			}}>
  			<MarkerLayer />
			</Map>
			<Controls />
		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	points: state.worldMapReducer.waypoints
})
export default Map;

