const initialState = {
	waypoints: [
		[-110.76236, 43.479644],
	],
}

const WorldMapReducer = (state = initialState, action) => {
	switch(action.type) {

		case 'ADD_WAYPOINT':
		return {
			...state,
			waypoints: [...state.waypoints, action.waypoint]
		}

		case 'UPDATE_LOCATION':
		return {
			...state,
			waypoints: action.locations
		}

		default: 
			return state

	}
}

export default WorldMapReducer;