// src/App.js


import "./App.css";
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import InterestedSelection from './components/Options/InterestedSelection';
import MainPage from './components/MainPage/MainPage';
import Header from "./components/Header/Header";
import { SelectedCategoriesProvider } from "./components/context/SelectedCategoriesContext";

function App() {
    return (
        <div className="min-h-screen w-screen ">
            <SelectedCategoriesProvider>
            <InterestedSelection />
            {/* <Header />
             <MainPage/>  */}
             </SelectedCategoriesProvider>
        </div>
    );
}

export default App;

