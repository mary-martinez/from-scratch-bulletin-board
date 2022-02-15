import { renderNote } from '../utils.js';

const bulletinBoard = document.getElementById('pinHere');

window.addEventListener('load', async () => {
    bulletinBoard.textContent = '';
    const notes = await fetchNotes();
    for (let note of notes) {
        const newNote = renderNote(note);
        bulletinBoard.append(newNote);
    }
});