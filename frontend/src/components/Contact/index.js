import React from 'react';
import { TextField } from 'react-md';
import './styles.scss';

const Contact = () => (
  <div className="contact">
    <div className="contact__form">
      <TextField
        id="floating-center-title"
        label="First Name"
        lineDirection="center"
        placeholder="Your name..."
        maxLength={255}
        className="md-cell md-cell--bottom"
      />
    </div>
  </div>
);

export default Contact;