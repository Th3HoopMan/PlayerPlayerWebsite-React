import React from 'react';
import './ContactForm.css';

const contactForm = () => {
    return (
        <div>
            <h1>Join the Conversation</h1>
            <p>
            Want to be a part of the show? Fantastic! Whether you have a question, 
            a comment, or hot take, we want to hear it. Submit your thoughts here, 
            or reach out to us via social media.
            </p>
            <form>
                <label>Name:</label>
                <input></input>
                <label>Email:</label>
                <input></input>
                <label>Message:</label>
                <textarea></textarea>
            </form>
        </div>
    );
}

export default contactForm;