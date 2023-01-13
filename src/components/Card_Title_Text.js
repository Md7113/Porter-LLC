import React from 'react'

const Card_Title_Text = (props) => {
    let classes = ' ' + props.className;
    return (
      <div classes= {classes}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    );
}

export default Card_Title_Text;
