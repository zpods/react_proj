import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { Redirect } from "react-router";
import { registerUser } from '../../reduxSlices/formSlice/formSlice';
import { messageActions } from '../../reduxSlices/messageSlice/messageSlice';
import { formActions } from '../../reduxSlices/formSlice/formSlice';
import { clearMessage, resetMessage, setProperMessage } from '../../utils/utils';



function RegisterForm () {    

    const dispatch = useDispatch();

    const logged_in = useSelector((state) => state.forms.login);
    const message_error = useSelector((state) => state.forms.error);
    const message_success = useSelector((state) => state.forms.loading);
    const response_message = useSelector((state) => state.forms.response_message);
    const is_login = useSelector((state) => state.forms.login);
    const show_message = useSelector( (state) => state.message.show_message);
    let message_email = '';
    let message_password = '';

  
    React.useEffect(() => {
      setProperMessage(dispatch, messageActions, message_error, response_message, is_login);
                 
    }, [dispatch, message_success, message_error, is_login, response_message]);
  
    React.useEffect( () => {
        const timer = setTimeout(()=>{
            resetMessage(dispatch, messageActions, formActions);
        }, 7500)
        return () => clearTimeout(timer);
    }, [dispatch, show_message])

    function formMessageReset(){
        message_email = '';
        message_password = '';
    }

    function onSubmit( values ){
        clearMessage(dispatch, messageActions);
        dispatch(registerUser(
            { 'name': values.name, 'email': values.email,
            'password': values.password, 'password_confirmation': values.confirm }
        )); 
        resetMessage(dispatch, messageActions, formActions);  
    }
       
    return (
        <React.Fragment>
            { logged_in && <Redirect to="/shop"/>}
            <Container className="form-dimension">
                <Form 
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {}
                        if (!values.name) {
                            errors.name = 'Required'
                        }
                        if (!values.email) {
                            errors.email = 'Required'
                        }
                        if (!values.password) {
                            errors.password = 'Required'
                        }
                        if (!values.confirm) {
                            errors.confirm = 'Required'
                        } else if (values.confirm !== values.password) {
                            errors.confirm = 'Must match'
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="name">
                                {({ input, meta }) => (
                                <div className="form">
                                    <label>Name</label>
                                    <input {...input} type="text" placeholder="Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                                )}
                            </Field>
                            <Field name="email">
                                {({ input, meta }) => (
                                <div className="form">
                                    <label>Email</label>
                                    <input {...input} type="text" placeholder="Email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    {message_email ? <span>{message_email}</span> : '' }
                                    
                                </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                <div className="form">
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    {message_password ? <span>{message_password}</span> : '' }
                                </div>
                                )}
                            </Field>
                            <Field name="confirm">
                                {({ input, meta }) => (
                                <div className="form">
                                    <label>Confirm</label>
                                    <input {...input} type="password" placeholder="Confirm" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                                )}
                            </Field>
                            <div className="buttons">
                                <button type="submit" disabled={submitting}
                                >
                                Submit
                                </button>
                                <button
                                type="button"
                                onClick={() => {form.reset(); formMessageReset();}}
                                disabled={submitting || pristine}
                                >
                                Reset
                                </button>
                            </div>
                        </form>
                    )}
                >
                </Form>
            </Container>
        </React.Fragment>    
    );
    
        
}

export default RegisterForm;
