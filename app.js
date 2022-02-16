import { renderNote } from './utils.js';
import { fetchNotes, getUser, logOut } from './fetch-utils.js';
const bulletinBoard = document.getElementById('pinHere');
const logBtn = document.getElementById('log');
const createBtn = document.getElementById('create-post');

function defineLogBtn(authStatus) {
    if (authStatus) {
        logBtn.textContent = 'Log-Out';
    } else {
        logBtn.textContent = 'Log-In or Sign-Up';
    }
};

window.addEventListener('load', async () => {
    const authStatus = getUser();
    defineLogBtn(authStatus);

    bulletinBoard.textContent = '';
    const notes = await fetchNotes();
    for (let note of notes) {
        const newNote = renderNote(note);
        bulletinBoard.append(newNote);
    }
});

logBtn.addEventListener('click', async () => {
    const authStatus = getUser();
    if (authStatus) {
        await logOut();
        location.replace('/');
    } else {
        location.replace('/auth/');
    }

});

createBtn.addEventListener('click', () => {
    const authStatus = getUser();
    if (authStatus) {
        location.replace('/create/');
    } else {
        location.replace('/auth/');
    }
});

