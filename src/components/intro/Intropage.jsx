// src/components/intro/IntroPage.jsx
// import React from 'react';
// import './Intropage.css';

// function Intropage() {
//   return (
//     <div className="intro-container">
//       <div className="intro-content">
//         <h1>Jan Connect</h1>
//         {/* Image from the public folder */}
//         <img src="/jan.png" alt="Introduction" className="intro-image" />
//         <p>We aim to solve the issue of accessibility and personalization in 
//             delivering government services and news. Many users face barriers due to language differences
//              and difficulty in navigating through scattered information.</p>
//       </div>
//     </div>
//   );
// }
// export default Intropage;
import React from 'react';
import './Intropage.css';

function Intropage() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Jan Connect</h1>
        <img src="/jan.png" alt="Introduction" className="intro-image" />
        <p>
          We aim to solve the issue of accessibility and personalization in delivering government services and news. Many users face barriers due to language differences and difficulty in navigating through scattered information.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
}

export default Intropage;


