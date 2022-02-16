import { insertRow, logOut } from '../fetch-utils.js';

const homeBtn = document.getElementById('home');
const logOutBtn = document.getElementById('log-out');
const postForm = document.getElementById('create-post-form');
const title = document.getElementById('title');
const message = document.getElementById('message');
const contact = document.getElementById('contact');

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
    // console.log(newPost);
    const test = await insertRow(newPost);
    postForm.reset();
    location.replace('/');
});