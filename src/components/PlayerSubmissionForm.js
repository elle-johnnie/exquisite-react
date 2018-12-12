import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state ={
      adj1: '',
      adj2: '',
      adv: '',
      noun1: '',
      noun2: '',
      verb: '',
    }
  }

  handleChanges = (e) => {
    const updateState = {};
    const fieldName = e.target.name;
    updateState[fieldName] = e.target.value;
    this.setState(updateState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { adj1, adj2, noun1, noun2, adv, verb} = this.state;
    const newLine = `The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2}.`;
    this.props.handleSubmitLineCallback(newLine);
  };

  generateFormFields = () => {
    return this.props.fields.map((field, i) => {
      if (field.key) {
        return <input
            key={i}
            name={field.key}
            placeholder={field}
            value={this.state[field.key]}
            type="text"
            onChange={this.handleChanges}
            className={this.state[field.key] === '' ? "PlayerSubmissionForm__input--invalid" : "PlayerSubmissionForm__input"}
        />
      } else {
        return field;
      }
    });
  }


  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.index }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">

            { this.generateFormFields() }

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
  isSubmitted: PropTypes.bool,
  handleSubmitLineCallback: PropTypes.func,
};

export default PlayerSubmissionForm;
