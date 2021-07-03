import React  from 'react';
import { useSelector } from 'react-redux';
import './Message.css';

function Message () {

    const show_message = useSelector((state)=>state.message.show_message);
    const type_message = useSelector((state)=>state.message.type_message);
    const message = useSelector((state)=>state.message.message);
    
    const css_classes = `${type_message} message`

    return(
        <div className="parent-message">
            { show_message && message && <div className={css_classes}>Status of action: {message}</div> }
        </div>
    )
}

export default Message