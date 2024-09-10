import React from 'react'
import FirstSelection from '../Options/FirstSelection'
import SecondSelection from '../Options/SecondSelection'
import ThirdSelection from '../Options/ThirdSelection'
import TopNews from '../Options/TopNews'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom';

const MainPage = () => {

  const location = useLocation();
  const { selectedCategories } = location.state || { selectedCategories: [] };


  return (

    <div>
          <Header />
         <TopNews/>
         <FirstSelection categories={selectedCategories} />
         <SecondSelection categories={selectedCategories} />
         <ThirdSelection categories={selectedCategories} />
    </div>
  )
}

export default MainPage
