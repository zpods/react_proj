import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { Redirect } from "react-router";
import { signupUser } from '../../reduxSlices/formSlice/formSlice';
import { messageActions } from '../../reduxSlices/messageSlice/messageSlice';
import { formActions } from '../../reduxSlices/formSlice/formSlice';
import { clearMessage, resetMessage, setProperMessage } from '../../utils/utils';
import './Form.css';
function LoginFrom () {

  const dispatch = useDispatch();

  const logged_in = useSelector((state) => state.forms.login);
  const message_error = useSelector((state) => state.forms.error);
  const response_message = useSelector((state) => state.forms.response_message);
  const is_login = useSelector((state) => state.forms.login);
  const show_message = useSelector( (state) => state.message.show_message);
  const type_message = useSelector( (state) => state.message.type_message);
  let message_email = '';
  let message_password = '';

  React.useEffect(() => {
    setProperMessage(dispatch, messageActions, message_error, response_message, is_login);            
  }, [dispatch, message_error, response_message, is_login]);

  React.useEffect(()=>{
    const timer = setTimeout(()=>{
      resetMessage(dispatch, messageActions, formActions);
    }, 7500);
    return () => clearTimeout(timer);
  }, [dispatch, type_message, show_message])

  function form_message_reset() {
    message_email = '';
    message_password = '';
  }

  function onSubmit (values) {
    clearMessage(dispatch, messageActions);
    dispatch(signupUser({email: values.email, password: values.password}));
    
    resetMessage(dispatch, messageActions, formActions);
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
                  onClick={() => { form.reset(); form_message_reset(); }}
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
