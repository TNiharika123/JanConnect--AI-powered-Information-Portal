


// // src/components/intro/IntroPage.jsx
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import './IntroPage.css';

// function IntroPage() {
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   // Automatically redirect to the homepage after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate('/home'); // Redirect to homepage
//     }, 5000); // 5 seconds delay
//     return () => clearTimeout(timer); // Clean up the timer
//   }, [navigate]);

//   return (
//     <div className="intro-container">
//       <div className="intro-content">
//         <h1>Jan Connect</h1>
//         {/* Image from the public folder */}
//         <img src="public\jan.png" alt="Introduction" className="intro-image" />
//         <p>We aim to solve the issue of accessibility and personalization in 
//             delivering government services and news. Many users face barriers due to language differences
//              and difficulty in navigating through scattered information.</p>
//       </div>
//     </div>
//   );
// }

// export default IntroPage;


// src/components/intro/IntroPage.jsx
import React from 'react';
import './IntroPage.css';

function IntroPage() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Jan Connect</h1>
        {/* Image from the public folder */}
        <img src="/jan.png" alt="Introduction" className="intro-image" />
        <p>We aim to solve the issue of accessibility and personalization in 
            delivering government services and news. Many users face barriers due to language differences
             and difficulty in navigating through scattered information.</p>
      </div>
    </div>
  );
}

export default IntroPage;
