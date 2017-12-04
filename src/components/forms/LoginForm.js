import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LoginForm extends Component {
  componentDidMount() {
    this.props.submitUser();
    this.props.fetchUser();
  }

  renderFields() {
    return (
      <div className='forms'>
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
      </div>
    );
  }

  render(){
    const { handleSubmit } = this.props;

    const { history } = this.props;
    return (
      <div id='login-form'>
        <div className="row">
          <form
            onSubmit={handleSubmit(values => this.props.submitUser(values))}
            className="col s12">
            {this.renderFields()}
            <button
              className="btn waves-effect waves-light" type="submit"
              onClick={() => this.props.fetchUser}
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

  if (!values.email || emailCheck === false) {
    errors.email = 'You forgot to provide us with a valid email';
  }

  if (!values.password) {
    errors.password = 'You forgot the secret password';
  }

  return errors;
};

LoginForm = reduxForm({
  validate,
  form: 'loginForm'
})(LoginForm);

export default connect(null, actions)(withRouter(LoginForm));
