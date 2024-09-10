import React, { useState } from 'react';
import './thirdSelection.css';
import { useContext } from 'react';

import { SelectedCategoriesContext } from '../context/SelectedCategoriesContext'; // Correct path // Import the context


const newsData = [
  { id: 1, title: "News 1", description: "Description for News 1" },
  { id: 2, title: "News 2", description: "Description for News 2" },
  { id: 3, title: "News 3", description: "Description for News 3" },
  { id: 4, title: "News 4", description: "Description for News 4" },
  { id: 5, title: "News 5", description: "Description for News 5" },
  { id: 6, title: "News 6", description: "Description for News 6" },
];

const ThirdSelection = ({categories}) => {

    const { selectedCategories } = useContext(SelectedCategoriesContext); // Access selected categories

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < newsData.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container-wrapper">
      <h2 className="heading">----- {categories[2] || 'No category selected'} ------</h2>
      <div className="news-container">
        <div className="arrow left-arrow" onClick={handlePrev}>&#9664;</div>
        <div className="news-box">
          {newsData.slice(startIndex, startIndex + 4).map((news) => (
            <div key={news.id} className="news-item">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          ))}
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>&#9654;</div>
      </div>
    </div>
  );
};

export default ThirdSelection;
