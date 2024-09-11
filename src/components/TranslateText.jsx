import React from 'react';
import useTranslation from '../hooks/useTranslation';
import useSpeech from '../hooks/useSpeech';

const TranslateText = ({ text, language, enableSpeech }) => {
  const translatedText = useTranslation(text, language);
  const [audioUrl, speakText] = useSpeech(translatedText, language);

  const handleSpeak = () => {
    if (enableSpeech) {
      speakText();
    }
  };

  return (
    <div>
      <p>{translatedText}</p>
      {audioUrl && <audio controls src={audioUrl}>Your browser does not support the audio element.</audio>}
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TranslateText;
