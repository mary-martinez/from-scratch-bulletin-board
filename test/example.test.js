// IMPORT MODULES under test here:
import { renderNote } from '../utils.js';

const test = QUnit.test;

test('renderNote should return a div with an h2, an optional img, and two p elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="note" id="note1"><h2 class="title" id="title1">Found Dog - Rufus</h2><img src="../assets/Rufus.jpg"><p class="text">This dog was found Sunday morning at 9am near the mailboxes. The collar says "Rufus". If you know the owner, please contact me so I can return this sweet pup!</p><p class="contact">founddog@gmail.com</p></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderNote({
        id: '1',
        title: 'Found Dog - Rufus',
        img: '../assets/Rufus.jpg',
        text: `This dog was found Sunday morning at 9am near the mailboxes. The collar says "Rufus". If you know the owner, please contact me so I can return this sweet pup!`,
        contact: 'founddog@gmail.com'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
