// src/components/IntroPage.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './IntroPage.css';

function IntroPage() {
  const history = useHistory();

  // Automatically redirect to the homepage after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/home'); // Redirect to homepage
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timer); // Clean up the timer
  }, [history]);

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Jan Connect</h1>
        {/* Image from the public folder */}
        <img src="public/png.png" alt="Introduction" className="intro-image" />
        <p>We aim to solve the issue of accessibility and personalization in 
            delivering government services and news. Many users face barriers due to language differences
             and difficulty in navigating through scattered information.</p>
        
      </div>
    </div>
  );
}

export default IntroPage;
