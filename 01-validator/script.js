const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    showSuccess(email);
  } else {
    showError(email, "Email not valid.");
  }
}

function checkPasswordsMatch(input1, input2) {
  return input1.value === input2.value;
}

function getFieldName(field) {
  return String(field.id).charAt(0) + String(field.id);
}

function checkRequired(inputArr) {
  for (let input of inputArr) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be ${min} chars.`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be ${max} chars.`);

  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, password, password2, email]);
  checkLength(username, 3, 15);
  checkLength(password, 3, 15);
  checkLength(password2, 3, 15);
  checkLength(email, 3, 15);
  isValidEmail(email);
  checkPasswordsMatch(password, password2);


  /* if (username.value === '') {
    showError(username, "username is required");
  } else {
    console.log("username is required");
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, "email is required");
  } else if(isValidEmail(email.value)){

  } else {
    console.log(`${email.value}`);
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, "password is required");
  } else {
    console.log(`${password.value}`);
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, "password2 is required");
  } else {
    console.log(`${password2.value}`);
    showSuccess(password);
  } */
});