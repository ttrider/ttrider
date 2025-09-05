// render a booklist


function renderBook() {
    const match = /[?&]?book=(\d+)/.exec(location.search);
    if (match) {
        const bookNo = parseInt(match[1], 10);
        if (!isNaN(bookNo)) {
            const books = booklistSource.getBooks();
            const book = books[bookNo - 1];
            if (book) {
                const elTitle = document.querySelector('title');
                if (elTitle) {
                    elTitle.textContent = `${booklistSource.bookTitle} ${bookNo} - ${book.title} - ${booklistSource.series} by ${booklistSource.author}`;
                }

                const elHeaderTitle = document.querySelector('div.title');
                if (elHeaderTitle) {
                    elHeaderTitle.textContent = `${booklistSource.bookTitle} ${bookNo} - ${book.title}`;
                }

                const elHeaderSeries = document.querySelector('a.series');
                if (elHeaderSeries) {
                    elHeaderSeries.textContent = `${booklistSource.series}`;
                    elHeaderSeries.setAttribute('href', booklistSource.url);
                }

                const elDownloads = document.querySelector('section.downloads');
                if (elDownloads) {

                    const downloads = document.createElement('span');
                    downloads.textContent = 'download:';
                    elDownloads.append(downloads);

                    book.downloads.forEach(d => {
                        const elA = document.createElement('a');
                        elA.setAttribute('href', d.url);
                        elA.textContent = d.type;

                        elDownloads.append(
                            elA
                        );
                    });
                }

                const elFrame = document.querySelector('iframe.readerframe');
                if (elFrame) {
                    elFrame.setAttribute('src', `/bibi/index.html?book=${book.reader}`);
                }

                return;
            }
        }
    }

    // navigate back
    navigation.back();
}


document.addEventListener('readystatechange', (ev) => {
    if (document.readyState === 'complete') {
        renderBook();
    }
});