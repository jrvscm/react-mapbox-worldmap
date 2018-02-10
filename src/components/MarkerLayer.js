import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Feature, Layer} from 'react-mapbox-gl';
import { updateLocation } from '../actions/index';
import '../reset.css';
import './MarkerLayer.css';

class MarkerLayer extends Component {
	componentDidMount() {
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


}


	onMouseEnter(e) {
		console.log('entered')
	}
	
	onMouseLeave(e) {
		console.log('left')
	}
	
	render() {
	
	const features = this.props.points.map((coords, index) =>
		<Feature key={index} index={index}
      		coordinates={coords}
      		onMouseEnter={(e) => this.onMouseEnter(e)}
      		onMouseLeave={(e) => this.onMouseLeave(e)}
      		draggable={'true'} />
	)

	return (
		<div>
			<Layer
      			type="symbol"
      			id="marker"
      			layout={{
      			"icon-image": "rocket-15",
      			"icon-size": 2}}>
      			{features}
    		</Layer>
		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	points: state.worldMapReducer.waypoints
})

export default connect(mapStateToProps)(MarkerLayer)