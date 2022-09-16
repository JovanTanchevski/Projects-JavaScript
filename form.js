const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let passwordConfirm = document.querySelector('#confirm');

let showError = (input, message) => {
  let formControl = input.parentElement;
  formControl.classList.add('form-control', 'error');
  let smallTxt = formControl.querySelector('small');
  smallTxt.innerText = message;
};
let showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.add('form-control', 'success');
};

let checkRequired = (arrInput) => {
  arrInput.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getWordUppercase(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};
let checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getWordUppercase(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getWordUppercase(input)}must be less than ${max} charatcers`
    );
  } else {
    showSuccess(input);
  }
};
let checkEmail = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

let getWordUppercase = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, passwordConfirm]);
  checkLength(username, 3, 14);
  checkLength(password, 6, 18);
  checkEmail(email);
});
