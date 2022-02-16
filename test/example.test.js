import { renderNote } from '../utils.js';

const test = QUnit.test;

test('renderNote should return a div with an h2, an optional img, and two p elements', (expect) => {
    const expected = `<div class="note" id="note1"><h2 class="title" id="title1">Found Dog - Rufus</h2><p class="text">This dog was found Sunday morning at 9am near the mailboxes. The collar says "Rufus". If you know the owner, please contact me so I can return this sweet pup!</p><p class="contact">founddog@gmail.com</p></div>`;

    const actual = renderNote({
        id: '1',
        title: 'Found Dog - Rufus',
        text: `This dog was found Sunday morning at 9am near the mailboxes. The collar says "Rufus". If you know the owner, please contact me so I can return this sweet pup!`,
        contact: 'founddog@gmail.com'
    });

    expect.equal(actual.outerHTML, expected);
});
