import React from 'react';   
import Header from '../Header/Header';
import News from './News';
import { useLocation } from 'react-router-dom';

function NewsDisplay() {
  const location = useLocation();
  
  // Extract category from URL query string
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || 'general'; // Default to 'general' if no category is specified

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  return (
    <div>
      <Header />
      {/* <News key={category} pageSize={8} apiKey={apiKey} country="us" category={category} /> */}
    </div>
  );
}

export default NewsDisplay;
