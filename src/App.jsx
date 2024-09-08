// src/App.js


import "./App.css";
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import InterestedSelection from './components/Options/InterestedSelection';
// import MainPage from './components/MainPage/MainPage';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="min-h-screen w-screen ">
            {/* <InterestedSelection /> */}
            <Header />
            {/* <MainPage/> */}
        </div>
    );
}

export default App;

