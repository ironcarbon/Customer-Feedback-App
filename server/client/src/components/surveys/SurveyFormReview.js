//SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = ({ onCancel, formValues }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {/* <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipient List</label>
                    <div>{formValues.emails}</div>
                </div>
            </div> */}
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}>
                Back
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    //console.log(state)
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyReview);