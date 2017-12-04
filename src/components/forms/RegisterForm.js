import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class RegisterForm extends Component {
  componentDidMount() {
    this.props.submitRegister;
  }
  renderFields() {
    return (
      <div className='forms'>
        <Field
          label='Name'
          type='text'
          name='name'
          component={FormField} />
        <Field
          label='Email'
          type='email'
          name='email'
          component={FormField} />
        <Field
          label='Password'
          type='password'
          name='password'
          component={FormField} />
        <Field
          label='Re-Enter Password'
          type='password'
          name='password2'
          component={FormField} />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div id='register-form'>
        <div className="row">
          <form
            onSubmit={handleSubmit(values => console.log(values))}
            className="col s12">
              {this.renderFields()}
              <button
                className="btn waves-effect waves-light" type="submit"
                >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailCheck = re.test(values.email);

  const errors = {};

  if (!values.name) {
    errors.name = 'You forgot your name?!';
  }

  if (!values.email || emailCheck === false) {
    errors.email = 'You forgot to provide us with a valid email';
  }

  if (!values.password) {
    errors.password = 'You forgot the secret password';
  }

  return errors;
};

RegisterForm = reduxForm({
  validate,
  form: 'registerForm'
})(RegisterForm)

export default connect(null, actions)(withRouter(RegisterForm));
