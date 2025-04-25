const phoneIcon = document.querySelector('.phone-icon');
const phoneTooltip = document.getElementById('phone-tooltip');
const phoneNumber = "825-736-0010"; // Replace with your real number

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
