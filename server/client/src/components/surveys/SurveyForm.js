//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                <Field
                    label="Survey Title"
                    type="text"
                    name="title"
                    component={SurveyField}
                />
                <Field
                    label="Subject Line"
                    type="text"
                    name="subject"
                    component={SurveyField}
                />
                <Field
                    label="Email Body"
                    type="text"
                    name="body"
                    component={SurveyField}
                />
                <Field
                    label="Recipient List"
                    type="text"
                    name="email"
                    component={SurveyField}
                />
            </div>
        )
    }
    // if we add any type of custom prop to the field right here they will be automatically forwarded on to the survey field for us. component="input" was early version

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);