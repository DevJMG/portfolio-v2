import React from 'react';
import './Passion.css';
import { Card } from '../../SubComponents/Card/Card';

const Passion = ({
    passion_section_heading1,
    passion_icon1,
    passion_title1,
    passion_description1,
    passion_icon2,
    passion_title2,
    passion_description2,
    passion_icon3,
    passion_title3,
    passion_description3
}) => {
    return (
        <>
        <div id='passion--section'>
            <section className='passion'>
                <div className='passion--container container'>
                    <div className='passion--row'>
                        <div className='passion--heading'>
                            <h1>{passion_section_heading1}</h1>
                        </div>
                        <div className='passion--content'>

                            <Card
                            icon={passion_icon1}
                            title={passion_title1}
                            description={passion_description1}
                            ></Card>

                            <Card
                            icon={passion_icon2}
                            title={passion_title2}
                            description={passion_description2}
                            ></Card>

                            <Card
                            icon={passion_icon3}
                            title={passion_title3}
                            description={passion_description3}
                            ></Card>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Passion;