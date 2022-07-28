import React from 'react';
import './Badge.css';

export const Badge = ({
    icon,
    title
}) => {

    return (
        <div className='badge'>
            <div className='badge--content'>
                {icon}
                <span>{title}</span>
            </div>
        </div>
    );
};
