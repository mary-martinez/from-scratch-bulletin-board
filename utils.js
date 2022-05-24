export function renderNote(content) {
    const div = document.createElement('div');
    div.classList.add('note');
    div.setAttribute('id', `note${content.id}`);

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.setAttribute('id', `title${content.id}`);
    h2.textContent = `${content.title}`;

    const pText = document.createElement('p');
    pText.classList.add('text');
    pText.textContent = `${content.text}`;

    const pContact = document.createElement('p');
    pContact.classList.add('contact');
    pContact.textContent = `${content.contact}`;
    
    div.append(h2, pText, pContact);
    return div;
}