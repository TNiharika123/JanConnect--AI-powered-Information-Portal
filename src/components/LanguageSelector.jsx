import React, { useContext } from "react";
import { TranslationContext } from "./context/TranslationContext";

function LanguageSelector() {
  const { language, setLanguage } = useContext(TranslationContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleChange} className="language-selector">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      {/* Add more languages as needed */}
    </select>
  );
}

export default LanguageSelector;
