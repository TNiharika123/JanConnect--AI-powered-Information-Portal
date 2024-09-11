document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language");
  const translateElements = document.querySelectorAll(".translate");
  const translateHeading = document.querySelector(".translate-heading");
  const speakButtons = document.querySelectorAll(".speak-btn");

  function translateAll() {
    translateText(translateHeading);
    translateElements.forEach((element) => {
      translateText(element);
    });
  }

  languageSelect.addEventListener("change", translateAll);

  // Translate everything on page load
  translateAll();

  speakButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".scheme-card");
      const textToSpeak = Array.from(card.querySelectorAll(".translate"))
        .map((el) => el.textContent)
        .join(". ");
      speakText(textToSpeak);
    });
  });

  function translateText(element) {
    const originalText =
      element.getAttribute("data-original") || element.textContent;
    element.setAttribute("data-original", originalText);

    fetch("/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: originalText,
        language: languageSelect.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        element.textContent = data.translated;
      })
      .catch((error) => console.error("Error:", error));
  }

  function speakText(text) {
    fetch("/speak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        language: languageSelect.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
        audio.play();
      })
      .catch((error) => console.error("Error:", error));
  }
});
