import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState(
        {
            name: '',
            email: '',
            message: ''
        });
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
    }
};

    const handleChange =(e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                    
                }
            }
            
        };

    //JSX
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onBlur={handleChange} type="text" name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input onBlur={handleChange} type="email" name="email" defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea onBlur={handleChange} name="message" rows="5" defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button 
                data-testid="button"
                type="submit"
                >Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;