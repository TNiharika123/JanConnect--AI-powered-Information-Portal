import { useState, useEffect } from 'react';
import axios from 'axios';

const useTranslation = (text, language) => {
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const translateText = async () => {
      try {
        const response = await axios.post('/translate', {
          text: text,
          language: language,
        });
        setTranslatedText(response.data.translated);
      } catch (error) {
        console.error('Translation error:', error);
      }
    };

    if (language) {
      translateText();
    }
  }, [text, language]);

  return translatedText;
};

export default useTranslation;
