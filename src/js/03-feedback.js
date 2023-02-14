import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const LOCAL_USER_DATA = 'feedback-form-state';
const parseLocalUserData = JSON.parse(localStorage.getItem(LOCAL_USER_DATA));
const TEMP_USER_DATA = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
dataTemp();

function onInput(e) {
  TEMP_USER_DATA['email'] = emailEl.value;
  TEMP_USER_DATA['message'] = messageEl.value;
  const userDataToSting = JSON.stringify(TEMP_USER_DATA);
  localStorage.setItem(LOCAL_USER_DATA, userDataToSting);
}

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(parseLocalUserData);
  localStorage.removeItem(LOCAL_USER_DATA);
}

function dataTemp() {
  if (localStorage.getItem(LOCAL_USER_DATA) !== null) {
    emailEl.value = parseLocalUserData.email;
    messageEl.value = parseLocalUserData.message;
  }
}
