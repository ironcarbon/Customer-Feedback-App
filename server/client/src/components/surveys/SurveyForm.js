//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient List", name: "email" }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text" label={label}
                    name={name} />
            );
        });
    }
    // if we add any type of custom prop to the field right here they will be automatically forwarded on to the survey field for us. component="input" was early version

    //lodash map function: use iterate over an array then return a new array consisting of a bunch of different records inside of it.

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    })
    // if (!values.title) {
    //     errors.title = 'You must provide a title'
    // }

    // if (!values.subject) {
    //     errors.subject = 'You must provide a subject'
    // }
    // if (!values.body) {
    //     errors.body = 'You must provide a body'
    // }
    // if (!values.email) {
    //     errors.email = 'You must provide an email'
    // }
    return errors;
}


export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);