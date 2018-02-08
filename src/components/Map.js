import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
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
  					style="mapbox://styles/mapbox/navigation-guidance-night-v2"
  					containerStyle={{
    				height: "100vh",
    				width: "100vw",
  				}}>
    				<Layer
      					type="symbol"
      					id="marker"
      					layout={{ "icon-image": "harbor-15" }}>
      					<Feature coordinates={[-110.762428, 43.479929]}/>
    				</Layer>
				</Map>
				<Controls />
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	points: state.worldMap.waypoints
})

export default connect(mapStateToProps) (Map);

