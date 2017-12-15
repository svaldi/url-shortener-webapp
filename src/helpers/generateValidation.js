const validate = values => {
  const errors = {};
  if (!values.longUrl) {
    errors.longUrl = 'Required';
    console.log('errors', errors);
  }
  return errors;
};
export default validate;
