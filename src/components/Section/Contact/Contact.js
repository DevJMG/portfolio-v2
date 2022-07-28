import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Button } from './../../SubComponents/Button/Button';

function Contact({
    contact_heading_section,

    alert_message_img,
    alert_message,
    alert_btn_size,
    alert_btn_color,
    alert_btn_text,
    alert_btn_type,
    alert_btn_icon,

    contact_form_heading,
    contact_form_description,

    contact_input_label1,
    contact_form_type1,
    contact_form_placeholder1,
    contact_form_name1,

    contact_input_label2,
    contact_form_type2,
    contact_form_placeholder2,
    contact_form_name2,

    contact_input_label3,
    contact_form_row3,
    contact_form_type3,
    contact_form_placeholder3,
    contact_form_name3,

    contact_btn_size,
    contact_btn_color,
    contact_btn_text,
    contact_btn_type,
    contact_btn_icon 
}) {
    const initialValues = { name: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const form = useRef();
    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = "Name field is required.";
        }

        if (!values.email) {
            errors.email = "Email field is required.";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format.";
        }

        if (!values.message) {
            errors.message = "Message field is required.";
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            emailjs.sendForm('service_np5xaxo', 'template_x8bko9u', form.current, 'Yv5D7lC7HdmpOELtu');
            formValues.name = "";
            formValues.email = "";
            formValues.message = "";
        }
    }, [formErrors]);

    const closeAlert = () => {
        setAlert(false);
    }

    const openAlert = () => {
        setAlert(true);
    }

    return (
        <>
            <div id='contact--section'>
                <section className='contact'>
                    <div className='contact--container container'>
                        <div className='contact--row'>
                            <div className='contact--heading'>
                                <h1>{contact_heading_section}</h1>
                            </div>
                            <div className='contact--content'>

                                {Object.keys(formErrors).length === 0 && isSubmit ? (
                                    <div className={`contact--alert ${alert ? 'block' : 'hidden'}`}>
                                        <div className='alert'>
                                            <img src={alert_message_img} alt={alert_message_img} />
                                            <span className='alert--message'>
                                                {alert_message}
                                            </span>
                                            <Button
                                                buttonSize={alert_btn_size}
                                                buttonColor={alert_btn_color}
                                                text={alert_btn_text}
                                                type={alert_btn_type}
                                                icon={alert_btn_icon}
                                                onClick={closeAlert}
                                            >
                                            </Button>
                                        </div>
                                        <div className={`cover--hidden ${alert ? 'block' : 'hidden'}`}></div>
                                    </div>

                                ) : (
                                    <div></div>
                                )}

                                <form ref={form} onSubmit={handleSubmit} className='contact--form'>
                                    <div className='contact--form--wrapper'>
                                        <h1>{contact_form_heading}</h1>
                                        <p>
                                            {contact_form_description}
                                        </p>
                                    </div>
                                    <div className='contact--input--name'>
                                        <label>{contact_input_label1}</label>
                                        <input 
                                        type={contact_form_type1}
                                        placeholder={contact_form_placeholder1}
                                        name={contact_form_name1}
                                        value={formValues.name} 
                                        onChange={handleChange} />
                                        <p>
                                            {formErrors.name}
                                        </p>
                                    </div>
                                    <div className='contact--input--email'>
                                        <label>{contact_input_label2}</label>
                                        <input
                                        type={contact_form_type2} 
                                        placeholder={contact_form_placeholder2} 
                                        name={contact_form_name2}
                                        value={formValues.email} 
                                        onChange={handleChange} />
                                        <p>
                                            {formErrors.email}
                                        </p>
                                    </div>
                                    <div className='contact--input--message'>
                                        <label>{contact_input_label3}</label>
                                        <textarea
                                        rows={contact_form_row3} 
                                        type={contact_form_type3} 
                                        placeholder={contact_form_placeholder3} 
                                        name={contact_form_name3}
                                        value={formValues.message} 
                                        onChange={handleChange}>
                                        </textarea>
                                        <p>
                                            {formErrors.message}
                                        </p>
                                    </div>
                                    <div className='contact--btn'>
                                        <Button
                                        buttonSize={contact_btn_size}
                                        buttonColor={contact_btn_color}
                                        text={contact_btn_text}
                                        type={contact_btn_type}
                                        icon={contact_btn_icon}
                                        onClick={openAlert}
                                        >
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;