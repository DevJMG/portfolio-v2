import Typewriter from "typewriter-effect";

import { FaArrowDown, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { HiOutlineCursorClick } from 'react-icons/hi';

import { CgFileDocument } from 'react-icons/cg';

import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiReact, SiTailwindcss, SiBootstrap, SiGithub, SiNpm, SiAdobephotoshop, SiAdobeillustrator, SiFigma } from 'react-icons/si';

import cv from '../../assets/pdf/Resume-CV-JohnMichaelGadot.pdf';

export const hero = {
    hero_intro: "Hello, I'm",
    hero_name: 'JOHN MICHAEL GADOT',
    hero_description:
        <Typewriter
            options={{
                strings: ['Creative Freelancer', 'Front-End Web Developer'],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150,
            }}
        />,
    hero_btn_path: 'contact--section',
    hero_btn_size: 'btn--lg',
    hero_btn_color: 'btn--primary',
    hero_btn_text: 'HIRE ME',
    hero_btn_type: 'submit',
    hero_btn_icon: <HiOutlineCursorClick size={22} />,
    hero_cta_path: 'profile--section',
    hero_cta_size: 'btn--lg',
    hero_cta_color: 'btn--light',
    hero_cta_text: 'LEARN MORE',
    hero_cta_type: 'submit',
    hero_cta_icon: <FaArrowDown size={19} />,
    hero_icon_gitHub: 'https://github.com/DevJMG',
    hero_icon_linkedIn: ''
}

export const profile = {
    profile_section_heading: 'About',
    profile_img: require("../../assets/images/logo.png"),
    profile_alt: 'a',
    profile_role: 'Fron-End Web Developer',
    profile_name: 'JOHN MICHAEL GADOT',
    profile_summary: "I'm passionate in crafting web applications that are scalable and efficient while providing engaging and pixel-perfect user experiences through modern technologies and apporach.",
    profile_tag: "Currently, I'm seeking for an opportunity where I can implement and further my skills simultaneously.",
    profile_cv: cv,
    profile_btn_size: 'btn--lg',
    profile_btn_color: 'btn--dark',
    profile_btn_text: 'DOWNLOAD CV',
    profile_btn_type: 'submit',
    profile_btn_icon: <CgFileDocument size={22} />
}

export const tools = {
    tools_section_heading1: 'Technologies and Tools I used',
    tools_icon1: <SiHtml5 size={28} />,
    tools_title1: 'HTML5',
    tools_icon2: <SiCss3 size={28} />,
    tools_title2: 'CSS3',
    tools_icon3: <SiJavascript size={28} />,
    tools_title3: 'JavaScript',
    tools_icon4: <SiJquery size={28} />,
    tools_title4: 'JQuery',
    tools_icon5: <SiReact size={28} />,
    tools_title5: 'React JS',
    tools_icon6: <SiTailwindcss size={28} />,
    tools_title6: 'Tailwind CSS',
    tools_icon7: <SiBootstrap size={28} />,
    tools_title7: 'Bootstrap',
    tools_icon8: <SiGithub size={28} />,
    tools_title8: 'Github',
    tools_icon9: <SiNpm size={28} />,
    tools_title9: 'NPM',
    tools_section_heading2: 'Design Software',
    tools_icon10: <SiAdobephotoshop size={28} />,
    tools_title10: 'Photoshop',
    tools_icon11: <SiAdobeillustrator size={28} />,
    tools_title11: 'Illustrator',
    tools_icon12: <SiFigma size={28} />,
    tools_title12: 'Figma'
}

export const passion = {
    passion_section_heading1: 'Things that I enjoy to do',
    passion_icon1: require("../../assets/images/responsive-design.png"),
    passion_title1: 'Responsive Design',
    passion_description1: "I'm having an interest in responsiveness and making web applications I build look good on various screen sizes using both Mobile First approach and desktop Media Queries.",

    passion_icon2: require("../../assets/images/reusable-minimal-code.png"),
    passion_title2: 'Reusable & Minimal Code',
    passion_description2: "I'm doing my best to write my code as minimal and efficient as possible by using CSS variables, writing Custom Utility Classes, and creating Reusable Components.",

    passion_icon3: require("../../assets/images/great-ui-ux.png"),
    passion_title3: 'Efficient UI/UX',
    passion_description3: "I appreciate simple content structure and clean design patterns. I have an eye for design, which allows me to transform templates into Pixel-Perfect Components that is accessible to various types of users."
}

export const project = {
    project_section_heading1: 'PROJECT',
    project_title1: 'Portfolio',
    project_type1: 'Website',
    project_description1: 'This web-based portfolio was built using React JS to create reusable and custom components, and Tailwind CSS to ensure responsiveness of the design on various screen sizes. ',
    project_tag1_1: 'React JS',
    project_tag2_1: 'Tailwind CSS',
    project_img1: require("../../assets/images/project1.png"),
    project_title2: 'Quiz Management System',
    project_type2: 'Web-based App',
    project_description2: 'QMS is used to monitor and manage the quizzes of the learners. It was developed using Bootstrap to make responsive design, and JQuery to create dynamic content.',
    project_tag1_2: 'JQuery',
    project_tag2_2: 'Bootstrap',
    project_img2: require("../../assets/images/project2.png")
}

export const contact = {
    contact_heading_section: 'CONTACT',

    alert_message_img: require("../../assets/images/message-success.png"),
    alert_message: 'Your message has been sent successfully!',
    alert_btn_size: 'btn--lg',
    alert_btn_color: 'btn--primary',
    alert_btn_text: 'CONFIRM',
    alert_btn_type: 'submit',
    alert_btn_icon: <FaCheck size={20} />,

    contact_form_heading: "Let's Talk",
    contact_form_description: "Whether you have a question or want to hire me, my inbox is always open.",

    contact_input_label1: 'Name',
    contact_form_type1: 'text',
    contact_form_placeholder1: 'Your Name',
    contact_form_name1: 'name',

    contact_input_label2: 'Email',
    contact_form_type2: 'email',
    contact_form_placeholder2: 'Your Email',
    contact_form_name2: 'email',

    contact_input_label3: 'Message',
    contact_form_row3: '5',
    contact_form_type3: 'text',
    contact_form_placeholder3: 'Your Message Here...',
    contact_form_name3: 'message',
    
    contact_btn_size: 'btn--lg',
    contact_btn_color: 'btn--primary',
    contact_btn_text: 'SEND MESSAGE',
    contact_btn_type: 'submit',
    contact_btn_icon: <BiMailSend size={25} />
}

export const footer = {
    footer_link1: 'https://github.com/DevJMG',
    footer_icon1: <FaGithub size={28}/>,
    footer_link2: '',
    footer_icon2: <FaLinkedin size={28}/>
}