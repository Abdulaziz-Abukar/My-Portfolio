const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

slideElements.forEach(el => {
  observer.observe(el);
});
