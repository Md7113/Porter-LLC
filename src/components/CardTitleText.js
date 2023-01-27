import React from 'react'
import '../css/CardTitleText.css';

const CardTitleText = (props) => {
    let classes = '' + props.className;
    return (
      <div className= {classes}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    );
}

export default CardTitleText;
