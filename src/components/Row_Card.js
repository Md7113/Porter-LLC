import React from 'react';

const Row_Card = (props) => {
    let classes = 'card_row ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Row_Card;