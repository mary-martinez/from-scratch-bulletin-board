import { renderNote } from '../utils.js';

const bulletinBoard = document.getElementById('pinHere');

window.addEventListener('load', async () => {
    bulletinBoard.textContent = '';
    // const notes = await fetchNotes();
    const notes = [{
        id: '1',
        title: 'Found Dog - Rufus',
        img: '../assets/Rufus.jpg',
        text: `This dog was found Sunday morning at 9am near the mailboxes. The collar says "Rufus". If you know the owner, please contact me so I can return this sweet pup!`,
        contact: 'founddog@gmail.com'
    },
    {
        id: '2',
        title: 'House Sitter Wanted',
        img: '',
        text: 'Looking for a house sitter for 2 weeks in April',
        contact: '214-555-0126'
    }];
    for (let note of notes) {
        const newNote = renderNote(note);
        bulletinBoard.append(newNote);
    }
});