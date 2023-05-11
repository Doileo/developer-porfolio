// Get references to the name and email input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Validate the name input field
function validateName(nameInput) {
  const name = nameInput.value.trim();

  // If name is empty, add the 'invalid-input' class to the input element
  if (name === '') {
    nameInput.classList.add('invalid-input');
  } else {
    // Otherwise, remove the 'invalid-input' class from the input element
    nameInput.classList.remove('invalid-input');
  }
}

// Validate the email input field
function validateEmail(emailInput) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const email = emailInput.value.trim();

  // If the email is invalid, add the 'invalid-input' class to the input element
  // and set a custom error message for the input field
  if (!emailRegex.test(email)) {
    emailInput.classList.add('invalid-input');
    emailInput.setCustomValidity('Please enter a valid email address');
  } else {
    // Otherwise, remove the 'invalid-input' class from the input element
    // and clear the custom error message for the input field
    emailInput.classList.remove('invalid-input');
    emailInput.setCustomValidity('');
  }
}

// Add event listeners to the name and email input fields to validate the input
nameInput.addEventListener('input', () => validateName(nameInput));
emailInput.addEventListener('input', () => validateEmail(emailInput));






