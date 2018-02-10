const initialState = {
	waypoints: [
		[-110.762428, 43.479929],
		[-110.762428, 43.480000],
		[-110.762428, 43.490000],
		[-110.762428, 43.500000],
		[-110.762428, 43.510000],
		[-110.762428, 43.520000],
		[-110.762428, 43.530000],
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