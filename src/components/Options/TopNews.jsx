import React from 'react';
import './topnews.css';

const TopNews = () => {
  const gridItems = Array.from({ length: 8 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className="container-layout">
      <div className="left-container">Most Clicked Category of news by User</div>
      <div className="right-container">
        <div className="top-right-container">
          {gridItems.slice(0, 4).map((item, index) => (
            <div key={index} className="grid-item">{item}</div>
          ))}
        </div>
        <div className="bottom-right-container">
          {gridItems.slice(4, 8).map((item, index) => (
            <div key={index} className="grid-item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNews;
