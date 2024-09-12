// * eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Contact.css';
import Header from '../Header/Header'; // Importing the Header

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ideally, you would integrate an email service or backend here to handle form submissions
        alert('Thank you for your feedback! We will get back to you shortly.');
        console.log(formData);
    };

    return (
        <div>
            <Header /> {/* Display the header at the top */}
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any query or want to give feedback, feel free to reach us at <strong>devaanshic1509@gmail.com</strong> or use the form below.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Your Message" 
                            rows="5" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;