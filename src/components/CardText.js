import React from 'react';
import '../css/CardText.css';

const CardText = (props) => {
  let classes = '' + props.className;
  return (
    <div className = {classes}>{props.content}</div>
  )
}

export default CardText;