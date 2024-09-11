import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Translate = ({ children, language = 'en', enableSpeech = false }) => {
  const [translatedText, setTranslatedText] = useState(children);
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    const translateText = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/translate', {
          text: children,
          language: language,
        });
        setTranslatedText(response.data.translated);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    translateText();
  }, [children, language]);

  const handleSpeak = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/speak', {
        text: translatedText,
        language: language,
      });
      setAudioSrc(`data:audio/mp3;base64,${response.data.audio}`);
    } catch (error) {
      console.error('Error generating speech:', error);
    }
  };

  return (
    <div>
      <p>{translatedText}</p>
      {enableSpeech && (
        <div>
          <button onClick={handleSpeak}>Listen</button>
          {audioSrc && <audio controls src={audioSrc} />}
        </div>
      )}
    </div>
  );
};

export default Translate;
