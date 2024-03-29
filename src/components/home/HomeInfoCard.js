import React from 'react';

const HomeInfoCard = (props) => {
    let classes = ' ' + props.className;
    return (
      <div className= {classes}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    );
}

export default HomeInfoCard;
