import React from 'react';
import './Image.css';

function Image (props) {

    const image_src = props.src;
    const alt_text = props.alt;

    return (
        <img className="image" src={image_src} alt={alt_text}></img>
    )
}

export default Image;