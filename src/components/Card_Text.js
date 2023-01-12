import React from 'react';

const Card_Text = (props) => {
  let classes = 'card_row ' + props.className;
  return (
    <div classes = {classes}>{props.content}</div>
  )
}

export default Card_Text;