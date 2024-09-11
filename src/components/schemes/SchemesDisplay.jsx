import React from 'react';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import Schemes from './Schemes';

function SchemesDisplay() {
  const location = useLocation();
  
  // Extract category from URL query string
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || 'general'; // Default to 'general' if no category is specified

  // Use your API key for fetching data if needed
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  return (
    <div>
      <Header />
      <Schemes key={category} pageSize={8} />
    </div>
  );
}

export default SchemesDisplay;
