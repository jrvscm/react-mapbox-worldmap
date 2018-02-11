import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Feature, Layer, Popup} from 'react-mapbox-gl';
import { updateLocation } from '../actions/index';
import '../reset.css';
import './MarkerLayer.css';

class MarkerLayer extends Component {
	/*componentDidMount() {
		//just some demo math to move the marker along a road.
	let upOne = setInterval(() => {
		let newPointsArr=[];
		let newPoints = this.props.points.map((point, index) =>
			newPointsArr.push([point[0], point[1] + .0000020])
		)
			this.props.dispatch(updateLocation(newPointsArr))
		}, 50)

	setTimeout(() => {
		clearInterval(upOne);
	let right = setInterval(() => {
		let newPointsArr=[];
		let newPoints = this.props.points.map((point, index) =>
			newPointsArr.push([point[0] + .000005, point[1]])
		)
			this.props.dispatch(updateLocation(newPointsArr))
		}, 50)
			setTimeout(() => {
				clearInterval(right);
				let up = setInterval(() => {
				let newPointsArr=[];
				let newPoints = this.props.points.map((point, index) =>
				newPointsArr.push([point[0], point[1] + .000005])
			)
				this.props.dispatch(updateLocation(newPointsArr))
			}, 50)
				setTimeout(() => {
					clearInterval(up)
				}, 10000)
		}, 10700)
	}, 16800)


}*/
	render() {
	
	const features = this.props.points.map((coords, index) =>

		<Feature key={index}
      		coordinates={coords}
      		draggable={'true'}
      		properties={<Popup
  coordinates={[-0.13235092163085938,51.518250335096376]}
  offset={{
    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
  }}>
  <h1>Popup</h1>
</Popup>} />
	)

	return (
		<div>
			<Layer
      			type="symbol"
      			id="marker"
      			layout={{
      			"icon-image": "rocket-15",
      			"icon-size": 2}}>
      			{ features }
    		</Layer>
		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	points: state.worldMapReducer.waypoints
})

export default connect(mapStateToProps)(MarkerLayer)