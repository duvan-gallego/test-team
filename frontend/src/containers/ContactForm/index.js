import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from 'react-md';
import cn from 'classnames';
import sendContactForm from './actions';
import './styles.scss';


const ContactForm = ({ fields, sendContactForm }) => {

  const [formValues, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
  });

  const [formInvalid, setInvalid] = useState(true);

  useEffect(() => {
    let invalidValues = false;
    Object.keys(formValues).forEach((key) => {
      if (formValues[key] === '' && !invalidValues) {
        invalidValues = true;
      }
    });

    setInvalid(invalidValues);
  });

  const handleOnChange = (value, e) => {
    setValues({ ...formValues, [ e.target.id ]: value });
  }

  const handleOnClick = () => {
    sendContactForm(formValues);
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    });
  }

  return (
    <div className="contactForm">
      {
        fields.map(field =>
          <TextField
            lineDirection="center"
            onChange={handleOnChange}
            { ...field }
            value={formValues[field.id]}
          />
        )
      }
      <Button
        flat
        className={cn('contactForm__button', { 'contactForm__button--disabled' : formInvalid })}
        disabled={formInvalid}
        onClick={handleOnClick}
      >
        SUBMIT
      </Button>
    </div>
  )
};

const actions = {
  sendContactForm
};

export default connect(null, actions)(ContactForm);