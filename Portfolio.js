// Typing Effect
const text = ["Frontend Developer", "Web Designer", "Coder","Video Editor"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".text-animate h3");

function typeEffect() {
  if (index >= text.length) index = 0;
  currentText = text[index];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 100 : 150);
}
typeEffect();
    // Scroll Reveal Animation
const srElements = document.querySelectorAll("section, .skills-content, .education-content");

function revealOnScroll() {
  srElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once

