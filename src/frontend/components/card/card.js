import React from 'react';
import classes from './card.module.css';
import {ordinalNumbers} from '../../helpers/helperFunctions';

const Card = ({data, position}) => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <p data-testid='cardTitle' className={classes.cardTitle}>{data.libraryName}</p>
                <span data-testid='cardInfo' className={classes.cardInfo}>Appeared {data.count} times</span>
                <div className={classes.cardBadge}>
                    <span data-testid='rank'>{ordinalNumbers(position+1)}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
