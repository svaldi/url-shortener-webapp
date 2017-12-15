const validate = values => {
  const errors = {};
  if (!values.longUrl) {
    errors.longUrl = 'Required';
  }
  return errors;
};
export default validate;
