
export const  setProperMessage = (dispatch, messageActions, message_error, response_message, is_login
     ) =>{
    if(is_login){
      dispatch(messageActions.message({
        message: response_message,
        show_message: true, 
        type_message: 'success'
    }))
    }else{
      dispatch(messageActions.message({
        message: message_error,
        show_message: true, 
        type_message: 'error'
    }))
    }
  }

  export const  resetMessage = (dispatch, messageActions, formActions) => {
    const interval = setInterval(()=> {
      dispatch(messageActions.message({
        show_message: false, 
        type_message: '',
        response_message: '',
    }));
    dispatch(formActions.formMessageReset());
    clearInterval(interval);
    },8000)   
  }

 export const clearMessage = (dispatch, messageActions) => {
    dispatch(messageActions.message({
      show_message: false, 
      type_message: '',
      response_message: '',
  }))
  }