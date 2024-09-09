import React from 'react'
import FirstSelection from '../Options/FirstSelection'
import SecondSelection from '../Options/SecondSelection'
import ThirdSelection from '../Options/ThirdSelection'
import TopNews from '../Options/TopNews'

const MainPage = () => {
  return (
    <div>
         <TopNews/>
         <FirstSelection/>
         <SecondSelection/>
         <ThirdSelection/>
    </div>
  )
}

export default MainPage
