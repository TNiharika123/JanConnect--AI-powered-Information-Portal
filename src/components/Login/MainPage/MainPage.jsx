import React from 'react';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import FirstSelection from '../Options/FirstSelection';
import SecondSelection from '../Options/SecondSelection';
import ThirdSelection from '../Options/ThirdSelection';
import TopNews from '../Options/TopNews';
import Header from '../Header/Header';

const MainPage = () => {
  const location = useLocation();
  const { selectedCategories } = location.state || { selectedCategories: [] };

  console.log('MainPage Selected Categories:', selectedCategories); // Check the output here

  return (
    <div>
      <Header />
      <TopNews />
      <FirstSelection categories={selectedCategories} />
      <SecondSelection categories={selectedCategories} />
      <ThirdSelection categories={selectedCategories} />
    </div>
  );
};

export default MainPage;


