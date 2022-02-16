import { renderNote } from './utils.js';
import { checkAuth, fetchNotes, logOut } from './fetch-utils.js';
const bulletinBoard = document.getElementById('pinHere');
const logOutBtn = document.getElementById('log-out');


window.addEventListener('load', async () => {
    bulletinBoard.textContent = '';
    const notes = await fetchNotes();
    for (let note of notes) {
        const newNote = renderNote(note);
        bulletinBoard.append(newNote);
    }
});

logOutBtn.addEventListener('click', async () => {
    await logOut();
    checkAuth();
});