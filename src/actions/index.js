const ADD_WAYPOINT = 'ADD_WAYPOINT'
export const addWayPoint = (waypoint) => ({
	type: ADD_WAYPOINT,
	waypoint
})

const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const updateLocation = (locations) => ({
	type: UPDATE_LOCATION,
	locations
})