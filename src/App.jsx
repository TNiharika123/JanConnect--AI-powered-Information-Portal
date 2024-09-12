// src/App.js
import React from 'react';
import './App.css';
import InterestedSelection from './components/Options/InterestedSelection';
import { TranslationProvider } from './components/context/TranslationContext'; // Import TranslationProvider
import IntroPage from './components/intro/IntroPage';

function App() {
    return (
        <div className="min-h-screen w-screen">
            <TranslationProvider> {/* Wrap your components in TranslationProvider */}
                <IntroPage/>
                <InterestedSelection />
                {/* <Header />
                <MainPage/> */}
            </TranslationProvider>
        </div>
    );
}

export default App;
