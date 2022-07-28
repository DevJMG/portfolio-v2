import React from 'react';
import './Card.css';

export const Card = ({
    icon,
    title,
    description
}) => {

    return (
        <div className='card'>
            <div className='card--content'>
                <div className='card--img--wrapper'>
                    <img src={icon} alt={icon} />
                </div>
                <div className='card--text--wrapper'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
