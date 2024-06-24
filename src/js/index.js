import '../scss/styles.scss';

const textLengthElement = document.getElementById('text-length');
const buttonElement = document.getElementById('generate__password');
const rangeElement = document.getElementById('range');
const passwordElement = document.getElementById('password');

const allowedChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let passwordLength = rangeElement.value;
let finalPassword = '';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * allowedChar.length);
};

const setLengthPassword = ev => {
  passwordLength = ev.target.value;
  textLengthElement.textContent = passwordLength;
};

const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = generateRandomNumber();
    finalPassword += allowedChar[randomNumber];
  }
  return finalPassword;
};

const printPasswordValue = () => {
  passwordElement.value = generatePassword();
};

rangeElement.addEventListener('input', setLengthPassword);
buttonElement.addEventListener('click', printPasswordValue);
