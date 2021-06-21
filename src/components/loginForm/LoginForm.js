import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { Redirect } from "react-router";
import { signupUser } from '../../reduxSlices/loginSlice/loginSlice';
import './Form.css';
import axios from 'axios'






function LoginFrom () {

  const dispatch = useDispatch();

  const logged_in = useSelector((state) => state.login.login);

   console.log(logged_in); 
  


 

  const message_email = '';
  const message_password = '';

  function message_reset() {
    message_email = '';
    message_password = '';
  }

   function onSubmit (values) {
    dispatch(signupUser({email: values.email, password: values.password}));
    //props.checkCartIfProductsInCartExists();
  }

  function messageWhenAlreadyLogin(){
    message_email = `You are already login as    logout first` ;
    
  }


  function renderLoginForm(){
    return (
      <Container className="form-dimension">
        <Form
          onSubmit={onSubmit}
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            }
            return errors
          }}
          render={({
            submitError,
            handleSubmit,
            form,
            submitting,
            pristine,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input, meta }) => (
                  <div className="form">
                    <label>Email</label>
                    <input {...input} type="text" placeholder="Email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                    {message_email ? <span>{message_email}</span> : ''}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div className="form">
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                    {message_password ? <span>{message_password}</span> : ''}
                  </div>
                )}
              </Field>
              {submitError && <div className="error">{submitError}</div>}
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Log In
                  </button>
                <button
                  type="button"
                  onClick={() => { form.reset(); message_reset(); }}
                  disabled={submitting || pristine}
                >
                  Reset
                  </button>
              </div>
            </form>
          )}
        />
      </Container>
    );
  }

  
  return (
    <div>
      { logged_in && <Redirect to="/shop"/>}
      { renderLoginForm() }
      </div>
  )
}

export default LoginFrom;
