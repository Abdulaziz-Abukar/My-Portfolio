const projectLinks = [
  "https://abdulaziz-abukar.github.io/devfinder",
  "https://abdulaziz-abukar.github.io/jammming/",
  "https://apps.apple.com/vn/app/chek-productivity-app/id6470704114",
  "https://abdulaziz-abukar.github.io/Interactive-World-Map/",
  "https://github.com/Abdulaziz-Abukar/vacation-planner",
];

const projectCards = document.querySelectorAll(".projects");

projectCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    window.open(projectLinks[index], "_blank");
  });
});
