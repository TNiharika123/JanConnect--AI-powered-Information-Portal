import React from 'react';
import Header from '../Header/Header'; // Import the Header component
import './About.css'; // Assuming you create an About.css file for styling
import chhavi from '../../assets/chhavu.webp';
import devu from '../../assets/devu.webp';
import niharika from '../../assets/niharika.webp';
import priyanshi from '../../assets/priyanshi.webp';

const About = () => {
    const teamMembers = [
        { name: 'Devaanshi Chaturvedi', image: devu },
        { name: 'Chhavi J Singh', image: chhavi },
        { name: 'Niharika Thakur', image: niharika },
        { name: 'Priyanshi Gupta', image: priyanshi },
    ];

    return (
        <div>
            <Header /> {/* Display the header */}
            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to our platform! We are a dedicated team working to provide a personalized,
                    multilingual news recommendation system that ensures equal access to critical information
                    for all. Our mission is to deliver relevant and region-specific news, services, and updates
                    in your preferred language, enhancing civic engagement and transparency.
                </p>
                <h2 className="about-subtitle">Our Team</h2>
                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={member.name} className="team-member-img" />
                            <p className="team-member-name">{member.name}</p>
                        </div>
                    ))}
                </div>
                <p className="about-footer">
                    Together, we are committed to empowering users with timely, accessible, and tailored
                    information, making sure everyone stays informed and engaged.
                </p>
            </div>
        </div>
    );
};

export default About;
