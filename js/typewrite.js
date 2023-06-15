const texts = [
  "Welkom op mijn website!",
  "Ontdek mijn werk en neem contact met me op."
];

function typeWriter(element, text, speed) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent = text.substr(0, index + 1);
      index++;
      setTimeout(type, speed);
    } else {
      // Effect is voltooid, tekst centreren
      element.style.textAlign = "center";

      // Vlag instellen dat het typewriter-effect is afgespeeld in deze sessie
      sessionStorage.setItem("typewriterPlayed", "true");
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.getElementsByClassName("typewriter");
  const speed = 10; // Snelheid van 10 milliseconden

  // Controleren of het typewriter-effect al is afgespeeld in deze sessie
  const typewriterPlayed = sessionStorage.getItem("typewriterPlayed");
  if (typewriterPlayed !== null) {
    // Typewriter-effect is al afgespeeld in deze sessie, dus de tekst direct tonen
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent = texts[i];
      elements[i].style.textAlign = "center"; // Tekst direct centreren
    }
  } else {
    // Typewriter-effect afspelen
    for (let i = 0; i < elements.length; i++) {
      typeWriter(elements[i], texts[i], speed);
    }
  }
});
