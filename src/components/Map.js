import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import './Map.css';

class Map extends Component {
	render() {
	const Map = ReactMapboxGl({
		accessToken: "pk.eyJ1IjoiY2hyaXNqYXJ2aXNkZXYiLCJhIjoiY2pkYjY1eTE3NmdodTJ4bjI1MzhhMGQ0NyJ9.94u5c1kaGse7UvaEJPFIHw"
	})
		return (
			<div>
				<Map
  					style="mapbox://styles/mapbox/navigation-guidance-night-v2"
  					containerStyle={{
    				height: "100vh",
    				width: "100vw"
  				}}>
    				<Layer
      					type="symbol"
      					id="marker"
      					layout={{ "icon-image": "marker-15" }}>
      					<Feature coordinates={[43.479929, -110.762428]}/>
    				</Layer>
				</Map>
			</div>
		);
	}
}

export default Map;

