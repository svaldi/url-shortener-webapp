import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../helpers/generateValidation';

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="get-short-url"
      />
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
);

let UrlForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="longUrl"
          type="text"
          component={renderField}
          label="Get a short url"
          placeholder="http://www.example.com/hello/mylink"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

UrlForm = reduxForm({
  form: 'generateShortUrlForm',
  validate
})(UrlForm);

export default UrlForm;
