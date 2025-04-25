const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".list-items a");

function closeNavbar() {
  navbar.classList.remove("active");
  hamburger.classList.remove("active");
  hamburger.textContent = "☰"; // Set back to hamburger
}

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    hamburger.textContent = "✖"; // X
  } else {
    hamburger.textContent = "☰"; // Hamburger
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeNavbar();
  });
});

const titles = ["Developer", "Gamer", "Funny Guy", "Husband", "Problem Solver", "Tech Enthusiast"];
const changingTitle = document.getElementById("changing-title");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120; // speed of typing (ms)
let pauseBetweenWords = 2000; // pause before deleting (ms)

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

const projectLinks = [
    "https://abdulaziz-abukar.github.io/Interactive-World-Map/",  // Interactive World Map
    "https://github.com/Abdulaziz-Abukar/vacation-planner",    // Vacation Planner
    "https://apps.apple.com/vn/app/chek-productivity-app/id6470704114"         // Chek IOS App
];
  
  const projectCards = document.querySelectorAll(".projects");
  
  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      window.open(projectLinks[index], "_blank"); // open in new tab
    });
});

const phoneIcon = document.querySelector('.phone-icon');
const phoneTooltip = document.getElementById('phone-tooltip');
const phoneNumber = "825-736-0010"; // 🔥 Replace with your real phone number

phoneIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(phoneNumber).then(() => {
    phoneTooltip.textContent = "Copied!";
    setTimeout(() => {
      phoneTooltip.textContent = "Click to Copy";
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy!', err);
  });
});


const form = document.querySelector(".contact-form");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  let valid = true;
  let errors = [];

  // Email Validation
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    valid = false;
    errors.push("Email is required.");
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    valid = false;
    errors.push("Please enter a valid email address.");
  }

  // Message Validation
  const messageValue = messageInput.value.trim();
  if (!messageValue) {
    valid = false;
    errors.push("Message cannot be empty.");
  } else if (messageValue.length < 10) {
    valid = false;
    errors.push("Message must be at least 10 characters.");
  }

  if (!valid) {
    e.preventDefault(); // Stop the form from submitting
    alert(errors.join("\n")); // Show all errors together
  }
});
