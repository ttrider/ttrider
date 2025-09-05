// render a booklist

function createEl(tagName, className, text, attrs) {
    const el = document.createElement(tagName);
    if (className) {
        
        el.classList.add(...className.split(' '));
    }
    if (text) {
        el.textContent = text;
    }

    if (attrs) {
        attrs.forEach(element => {
            el.setAttribute(element.name, element.value);
        });
    }

    return el;
}

function renderBook(book) {

    const bookEl = createEl('div', 'book');

    const coverA = createEl('a', null, null, [{ name: 'href', value: book.readerUrl }]);
    const cover = createEl('div', 'cover');
    cover.setAttribute('style', `background-image: url(${book.cover})`);
    coverA.appendChild(cover);

    const downloads = createEl('div', 'downloads');

    downloads.append(
        createEl('a', null, 'read', [{ name: 'href', value: book.readerUrl }]),
        createEl('div', null, 'download:'),
    )

    book.downloads.forEach(d => {
        downloads.append(
            createEl('a', null, d.type, [{ name: 'href', value: d.url }]),
        );

    });

    bookEl.append(coverA, downloads);
    return bookEl; S
}

function renderComingSoon(comingSoon) {
    const lines = Array.isArray(comingSoon) ? comingSoon : [comingSoon];

    const bookEl = createEl('div', 'book');

    const cover = createEl('div', 'cover cover-soon');

    const comingSoonEl = createEl('div', 'coming-soon-text');

    comingSoonEl.append(...lines.map(line => createEl('div', null, line)));

    cover.append(comingSoonEl);

    bookEl.append(cover);

    return bookEl;
}

function renderBookList() {
    const booklist = document.querySelector('div.booklist');
    if (!booklist) {
        console.error('No div.booklist found');
        return;
    }

    const books = booklistSource.getBooks();

    const booksEl = books.map(book => renderBook(book));

    booklist.prepend(...booksEl);

    if (booklistSource.comingSoon) {
        booklist.append(renderComingSoon(booklistSource.comingSoon));
    }
}



document.addEventListener('readystatechange', (ev) => {
    if (document.readyState === 'complete') {
        renderBookList();
    }
});