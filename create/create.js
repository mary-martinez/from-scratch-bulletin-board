import { insertRow, logOut, getUser } from '../fetch-utils.js';

const homeBtn = document.getElementById('home');
const logOutBtn = document.getElementById('log-out');
const postForm = document.getElementById('create-post-form');
const title = document.getElementById('title');
const message = document.getElementById('message');
const contact = document.getElementById('contact');

window.addEventListener('load', async () => {
    const authStatus = getUser();
    if (!authStatus) {
        location.replace('/auth/');
    }
});

homeBtn.addEventListener('click', () => {
    location.replace('/');
});

logOutBtn.addEventListener('click', async () => {
    await logOut();
    location.replace('/');
});

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newPost = {
        title: title.value,
        text: message.value,
        contact: contact.value
    };
    await insertRow(newPost);
    postForm.reset();
    location.replace('/');
});