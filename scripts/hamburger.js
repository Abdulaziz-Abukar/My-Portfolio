const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".list-items a");

function closeNavbar() {
  navbar.classList.remove("active");
  hamburger.classList.remove("active");
  hamburger.textContent = "☰";
}

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeNavbar();
  });
});
