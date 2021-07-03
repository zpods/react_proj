import React from 'react';
import './Button.css';

function Button (props) {

    function buttonClickHandler(){
        props.buttonClick();
    }

    return (
        <button onClick={buttonClickHandler} className="button">{props.children}</button>
    )
}

export default Button;