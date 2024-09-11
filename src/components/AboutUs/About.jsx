// import React from 'react';

// import './About.css'; // Assuming you create an About.css file for styling

// const About = () => {
//     return (
//         <div className="about-container">
//             <div className="about-content">
//                 <h1 className="about-title">About Us</h1>
//                 <p className="about-description">
//                     Welcome to our platform! We are a dedicated team working to provide a personalized,
//                     multilingual news recommendation system that ensures equal access to critical information
//                     for all. Our mission is to deliver relevant and region-specific news, services, and updates
//                     in your preferred language, enhancing civic engagement and transparency.
//                 </p>
//                 <h2 className="about-subtitle">Our Team</h2>
//                 <ul className="team-list">
//                     <li>Devaanshi Chaturvedi</li>
//                     <li>Chhavi J Singh</li>
//                     <li>Niharika Thakur</li>
//                     <li>Priyanshi Gupta</li>
//                 </ul>
//                 <p className="about-footer">
//                     Together, we are committed to empowering users with timely, accessible, and tailored
//                     information, making sure everyone stays informed and engaged.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import Header from '../Header/Header'; // Import the Header component
import './About.css'; // Assuming you create an About.css file for styling

const About = () => {
    return (
        <div>
            <Header /> {/* Display the header */}
            <div className="about-container">
                <div className="about-content">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-description">
                        Welcome to our platform! We are a dedicated team working to provide a personalized,
                        multilingual news recommendation system that ensures equal access to critical information
                        for all. Our mission is to deliver relevant and region-specific news, services, and updates
                        in your preferred language, enhancing civic engagement and transparency.
                    </p>
                    <h2 className="about-subtitle">Our Team</h2>
                    <ul className="team-list">
                        <li>Devaanshi Chaturvedi</li>
                        <li>Chhavi J Singh</li>
                        <li>Niharika Thakur</li>
                        <li>Priyanshi Gupta</li>
                    </ul>
                    <p className="about-footer">
                        Together, we are committed to empowering users with timely, accessible, and tailored
                        information, making sure everyone stays informed and engaged.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
