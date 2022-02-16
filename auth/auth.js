// import functions and grab DOM elements
import { signupUser, signInUser, redirectIfLoggedIn } from '../fetch-utils.js';
// let state
const signUpForm = document.getElementById('signUp');
const signUpEmail = document.getElementById('email-signUp');
const signUpPassword = document.getElementById('password-signUp');

const signInForm = document.getElementById('signIn');
const signInEmail = document.getElementById('email-signIn');
const signInPassword = document.getElementById('password-signIn');
redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('email', signUpEmail.value, 'and password', signUpPassword.value);
    await signupUser(signUpEmail.value, signUpPassword.value);
    redirectIfLoggedIn();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('email', signInEmail.value, 'and password', signInPassword.value);
    await signInUser(signInEmail.value, signInPassword.value);
    redirectIfLoggedIn();
});