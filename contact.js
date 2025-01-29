document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Helper functions to validate inputs
    function validateName() {
      const name = nameInput.value.trim();
      if (name === "" || name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
        nameError.style.display = "block";
        return false;
      } else {
        nameError.style.display = "none";
        return true;
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        emailError.style.display = "block";
        return false;
      } else {
        emailError.style.display = "none";
        return true;
      }
    }

    function validateMessage() {
      const message = messageInput.value.trim();
      if (message === "" || message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters.";
        messageError.style.display = "block";
        return false;
      } else {
        messageError.style.display = "none";
        return true;
      }
    }

    // Live validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);

    // Validate all fields on form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        form.submit(); // Submit form if all fields are valid
      }
    });
  });