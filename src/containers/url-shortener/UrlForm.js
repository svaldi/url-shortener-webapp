import React from 'react';
import { Field, reduxForm } from 'redux-form';

let UrlForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="longUrl">Long URL: </label>
        <Field name="longUrl" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

UrlForm = reduxForm({
  form: 'generateShortUrlForm'
})(UrlForm);

export default UrlForm;
