import React from 'react';

const Card = props => {
    console.log(props);

    let suitClass = '';
    let symbol = '';

    if (props.suit === 'H') {
        symbol = '♥';
        suitClass = 'hearts';
    } else if (props.suit === 'D') {
        suitClass = 'diams';
        symbol = '♦';
    } else if (props.suit === 'C') {
        suitClass = 'clubs';
        symbol = '♣';
    } else {
        suitClass = 'spades';
        symbol = '♠';
    }

    const newCard =  `card rank-${props.rank.toLowerCase()} ${suitClass}`;

    return (
        <div className={newCard}>
            <span className="rank">{props.rank.toUpperCase()}</span>
            <span className="suit">{symbol}</span>
        </div>
    );
};

export default Card;
