import React from 'react';
import './Message.css';

function Message ({message}) {
    const classRejected = message;
    const classes = `message ${classRejected}`;
    return(
        <div className={classes}>Status of action: {message}</div>
    )
}

export default Message