import React from 'react';
import '../css/CardsContainer.css';

const CardsContainer = (props) => {
    let classes = 'card_row ' + props.className;

    return (
        <div className={classes}> {props.children}</div>
    );
}

export default CardsContainer;