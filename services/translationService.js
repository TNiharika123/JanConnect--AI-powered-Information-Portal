import translate from 'google-translate-api';

// Function to translate text using google-translate-api
export const translateText = async (text, targetLanguage) => {
  try {
    const res = await translate(text, { to: targetLanguage });
    return res.text; // Return the translated text
  } catch (error) {
    console.error('Error during translation:', error);
    return text; // Return original text if there's an error
  }
};
