import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import Controls from './Controls';
import '../reset.css';

class Map extends Component {
	onMouseEnter(e) {
		console.log('entered')
	}
	onMouseLeave(e) {
		console.log('left')
	}

	render() {
	const Map = ReactMapboxGl({
		accessToken: "pk.eyJ1IjoiY2hyaXNqYXJ2aXNkZXYiLCJhIjoiY2pkYjY1eTE3NmdodTJ4bjI1MzhhMGQ0NyJ9.94u5c1kaGse7UvaEJPFIHw"
	})

	const features = this.props.points.map((coords, index) =>
		<Feature key={index} index={index}
      		coordinates={coords}
      		onMouseEnter={(e) => this.onMouseEnter(e)}
      		onMouseLeave={(e) => this.onMouseLeave(e)}
      		draggable={'true'} />
	)

		return (
			<div>
				<Map
					center={[-110.762428, 43.479929]}
  					style={"mapbox://styles/mapbox/light-v9"}
  					containerStyle={{
    				height: "100vh",
    				width: "100vw",
  				}}>
    				<Layer
      					type="symbol"
      					id="marker"
      					layout={{ "icon-image": "harbor-15" }}>
      					{features}
    				</Layer>
				</Map>
				<Controls />
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	points: state.worldMapReducer.waypoints
})

export default connect(mapStateToProps) (Map);

