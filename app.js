// import functions and grab DOM elements
import { signupUser, redirectIfLoggedIn } from './fetch-utils.js';
// let state
const signUpForm = document.getElementById('signUp');
const signUpEmail = document.getElementById('email-signUp');
const signUpPassword = document.getElementById('password-signUp');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('email', signUpEmail.value, 'and password', signUpPassword.value);
    await signupUser(signUpEmail.value, signUpPassword.value);
    redirectIfLoggedIn();
});

