import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {addWayPoint} from '../actions/index';
import '../reset.css';
import './AddWayPoint.css';

export class AddWayPointForm extends React.Component {
    onSubmit(values) {
    	let waypoint = [Number(values.addWaypointLong), Number(values.addWaypointLat)];
        this.props.dispatch(addWayPoint(waypoint));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="add-waypoint-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="add-waypoint">Add A Waypoint</label>
                <Field
                    component={Input}
                    type="number"
                    name="addWaypointLat"
                    id="addWaypointLat"
                    validate={[required, nonEmpty]}
                />
                <Field
                    component={Input}
                    type="number"
                    name="addWaypointLong"
                    id="addWaypointLong"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'AddWayPointForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('AddWayPointForm', 'add-waypoint'))
})(AddWayPointForm);