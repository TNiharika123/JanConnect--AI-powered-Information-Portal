// src/context/TranslationContext.js
import React, { createContext, useState, useEffect } from "react";

// Create a context for translation
export const TranslationContext = createContext();

// TranslationProvider component to manage and provide language state
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Save selected language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
