import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const hasError = (touched && error) ? 'has-danger' : '';
  return (
    <div className={`form-group ${hasError}`}>
      <TextField floatingLabelText={label} {...input} placeholder={label} type={type} className="form-control"  errorText={touched && error && <div className="form-control-feedback">{error}</div>}/>

    </div>
  );
};

const renderErrors = (errors) => (
  <div className="alert alert-danger" role="alert">
    {errors.map((error, index) => <span key={index}>{error.value}</span>)}
  </div>
);

const SignInForm = (props) => {
  const { handleSubmit } = props;
  const errors = props.errors <= 0 ? null : renderErrors(props.errors);
  return (
    <form onSubmit={handleSubmit}>
      {errors}
      <Field  name="email" type="email" component={renderField} label="Email" />
      <Field  name="password" type="password" component={renderField} label="Contraseña" />
      <RaisedButton type="submit" label="Ingresar" primary={true} style={style} className="btn btn-primary"></RaisedButton>
    </form>
  );
}

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email Invalido';
  }

  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length <= 3) {
    errors.password = 'Necesitas 4 caracteres como mínimo';
  }

  return errors;
}

// Decorate the form component
export default reduxForm({
  form: 'SignInForm', // a unique name for this form
  validate
})(SignInForm);
