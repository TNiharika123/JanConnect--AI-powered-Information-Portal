import { useState } from 'react';
import axios from 'axios';

const useSpeech = (text, language) => {
  const [audioUrl, setAudioUrl] = useState(null);

  const speakText = async () => {
    try {
      const response = await axios.post('/speak', {
        text: text,
        language: language,
      });
      const audioSrc = `data:audio/mp3;base64,${response.data.audio}`;
      setAudioUrl(audioSrc);
    } catch (error) {
      console.error('Speech synthesis error:', error);
    }
  };

  return [audioUrl, speakText];
};

export default useSpeech;
