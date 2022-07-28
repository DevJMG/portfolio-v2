import React from 'react';
import './ProjectTile.css';

export const ProjectTile = ({
    title,
    type,
    description,
    tag1,
    tag2,
    image
}) => {

    return (
        <div className='project--tile'>
            <div className='project--tile--text--wrapper'>
                <h1 className='project--tile--title'>{title}</h1>
                <p className='project--tile--type'>{type}</p>
                <p className='project--tile--description'>{description}</p>
                <p className='project--tile--tags'>
                    <span>{tag1}</span><span>{tag2}</span>
                </p>
            </div>
            <div className='project--tile--image--wrapper'>
                <img src={image} alt={image} />
            </div>
        </div>
    );
};
