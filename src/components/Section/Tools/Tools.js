import React from 'react';
import './Tools.css';
import { Badge } from '../../SubComponents/Badge/Badge';

const Tools = ({
    tools_section_heading1,
    tools_icon1,
    tools_title1,
    tools_icon2,
    tools_title2,
    tools_icon3,
    tools_title3,
    tools_icon4,
    tools_title4,
    tools_icon5,
    tools_title5,
    tools_icon6,
    tools_title6,
    tools_icon7,
    tools_title7,
    tools_icon8,
    tools_title8,
    tools_icon9,
    tools_title9,
    tools_section_heading2,
    tools_icon10,
    tools_title10,
    tools_icon11,
    tools_title11,
    tools_icon12,
    tools_title12
}) => {
    return (
        <>
        <div id='tools--section'>
            <section className='tools'>
                <div className='tools--container container'>
                    <div className='tools--row'>
                        <div className='tools--heading'>
                            <h1>{tools_section_heading1}</h1>
                        </div>
                        <div className='tools--content'>

                            <Badge
                            icon={tools_icon1}
                            title={tools_title1}
                            ></Badge>

                            <Badge
                            icon={tools_icon2}
                            title={tools_title2}
                            ></Badge>

                            <Badge
                            icon={tools_icon3}
                            title={tools_title3}
                            ></Badge>

                            <Badge
                            icon={tools_icon4}
                            title={tools_title4}
                            ></Badge>

                            <Badge
                            icon={tools_icon5}
                            title={tools_title5}
                            ></Badge>

                            <Badge
                            icon={tools_icon6}
                            title={tools_title6}
                            ></Badge>

                            <Badge
                            icon={tools_icon7}
                            title={tools_title7}
                            ></Badge>

                            <Badge
                            icon={tools_icon8}
                            title={tools_title8}
                            ></Badge>

                            <Badge
                            icon={tools_icon9}
                            title={tools_title9}
                            ></Badge>
                        </div>
                        <div className='tools--heading'>
                            <h1>{tools_section_heading2}</h1>
                        </div>
                        <div className='tools--content'>

                            <Badge
                            icon={tools_icon10}
                            title={tools_title10}
                            ></Badge>

                            <Badge
                            icon={tools_icon11}
                            title={tools_title11}
                            ></Badge>

                            <Badge
                            icon={tools_icon12}
                            title={tools_title12}
                            ></Badge>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Tools;