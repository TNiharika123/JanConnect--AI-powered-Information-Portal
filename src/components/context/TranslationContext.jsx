import React, { createContext, useState, useEffect } from "react";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Save selected language in localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
