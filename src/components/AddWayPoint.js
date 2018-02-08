import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import '../reset.css';
import './AddWayPoint.css';

export class AddWayPointForm extends React.Component {
    onSubmit(values) {
        console.log(values);
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
                    type="text"
                    name="add-waypoint"
                    id="add-waypoint"
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