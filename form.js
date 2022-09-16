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
let getWordUppercase = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputArr = [username, email, password, passwordConfirm];
  checkRequired(inputArr);
});
