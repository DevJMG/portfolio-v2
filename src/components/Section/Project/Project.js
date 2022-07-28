import React from 'react';
import './Project.css';
import { ProjectTile } from '../../SubComponents/ProjectTile/ProjectTile';

const Project = ({
    project_section_heading1,
    project_title1,
    project_type1,
    project_description1,
    project_tag1_1,
    project_tag2_1,
    project_img1,
    project_title2,
    project_type2,
    project_description2,
    project_tag1_2,
    project_tag2_2,
    project_img2
}) => {
    return (
        <>
        <div id='project--section'>
            <section className='project'>
                <div className='project--container container'>
                    <div className='project--row'>
                        <div className='project--heading'>
                            <h1>{project_section_heading1}</h1>
                        </div>
                        <div className='project--content'>

                        <ProjectTile
                        title={project_title1}
                        type={project_type1}
                        description={project_description1}
                        tag1={project_tag1_1}
                        tag2={project_tag2_1}
                        image={project_img1}
                        >
                        </ProjectTile>
                        
                        <ProjectTile
                        title={project_title2}
                        type={project_type2}
                        description={project_description2}
                        tag1={project_tag1_2}
                        tag2={project_tag2_2}
                        image={project_img2}
                        >
                        </ProjectTile>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Project;