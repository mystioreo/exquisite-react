import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';


class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              placeholder="hm..."
              type="text" />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  sendSubmissionCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
