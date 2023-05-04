import React from 'react';
import '../../css/home/HomeCardsContainer.css';

const CardsContainer = (props) => {
    let classes = 'cardRow ' + props.className;

    return (
        <div className={classes}> {props.children}</div>
    );
}

export default CardsContainer;