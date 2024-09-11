import React from "react";

function SpeakButton({ text }) {
  const handleSpeak = () => {
    // API call or logic to speak the passed text
    console.log("Speaking:", text);
  };

  return (
    <button onClick={handleSpeak} className="speak-btn">
      Speak
    </button>
  );
}

export default SpeakButton;
