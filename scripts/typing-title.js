const titles = ["Developer", "Gamer", "Funny Guy", "Husband", "Problem Solver", "Tech Enthusiast"];
const changingTitle = document.getElementById("changing-title");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;
let pauseBetweenWords = 2000;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  if (isDeleting) {
    changingTitle.textContent = currentTitle.substring(0, charIndex--);
  } else {
    changingTitle.textContent = currentTitle.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentTitle.length) {
    setTimeout(() => isDeleting = true, pauseBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
  }

  setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
}

typeEffect();
