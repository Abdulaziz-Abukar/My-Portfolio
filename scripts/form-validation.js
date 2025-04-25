const form = document.querySelector(".contact-form");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  let valid = true;
  let errors = [];

  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    valid = false;
    errors.push("Email is required.");
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    valid = false;
    errors.push("Please enter a valid email address.");
  }

  const messageValue = messageInput.value.trim();
  if (!messageValue) {
    valid = false;
    errors.push("Message cannot be empty.");
  } else if (messageValue.length < 10) {
    valid = false;
    errors.push("Message must be at least 10 characters.");
  }

  if (!valid) {
    e.preventDefault();
    alert(errors.join("\n"));
  }
});
