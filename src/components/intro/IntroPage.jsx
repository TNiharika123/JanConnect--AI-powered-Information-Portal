// src/components/intro/IntroPage.jsx
import React from 'react';
import './IntroPage.css';
import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <Link to="/register"> {/* Corrected Link component usage */}
      <div className="intro-container">
        <div className="intro-content">
          <h1  style={{
            fontFamily: "Comic Sans MS, cursive, sans-serif",
            fontSize: "3rem",
            fontWeight: "bold",
            marginRight: "40px"
          }}>Jan Connect</h1>
          {/* Image from the public folder */}
          <img src="/jan.png" alt="Introduction" className="intro-image" />
          <p
           style={{
            fontFamily: "Comic Sans MS, cursive, sans-serif",
            
            marginRight: "40px"
          }}>
            We aim to solve the issue of accessibility and personalization in
            delivering government services and news. Many users face barriers due to language differences
            and difficulty in navigating through scattered information.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default IntroPage;
