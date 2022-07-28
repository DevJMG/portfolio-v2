import React from 'react';
import './Profile.css';
import { Button } from '../../SubComponents/Button/Button';

const Profile = ({
    profile_section_heading,
    profile_img,
    profile_alt,
    profile_role,
    profile_name,
    profile_summary,
    profile_tag,
    profile_cv,
    profile_btn_size,
    profile_btn_color,
    profile_btn_text,
    profile_btn_type,
    profile_btn_icon
}) => {
    return (
        <>
        <div id='profile--section'>
            <section className='profile'>
                <div className='profile--container container'>
                    <div className='profile--row'>
                        <div className='profile--heading'>
                            <h1>{profile_section_heading}</h1>
                        </div>
                        <div className='profile--content'>
                            <div className='profile--img--wrapper'>
                                <div className='profile--img'>
                                    <img src={profile_img} alt={profile_alt} />
                                </div>
                            </div>
                            <div className='profile--text--wrapper'>
                                <h1 className='profile--name--line'>{profile_name}</h1>
                                <p className='profile--role--line'>{profile_role}</p>
                                <p className='profile--description'>
                                    {profile_summary}
                                </p>
                                <p className='profile--tag--line'>{profile_tag}</p>
                                <a href={profile_cv} target='_blank' rel='noreferrer'>
                                    <Button
                                    buttonSize={profile_btn_size}
                                    buttonColor={profile_btn_color}
                                    text={profile_btn_text}
                                    type={profile_btn_type}
                                    icon={profile_btn_icon}
                                    >
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Profile;