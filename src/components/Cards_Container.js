import React from 'react';
import '../css/Cards_Container.css';

const Cards_Container = (props) => {
    let classes = 'card_row ' + props.className;

    return (
        <div className={classes}> {props.children}</div>
    );
}

export default Cards_Container;