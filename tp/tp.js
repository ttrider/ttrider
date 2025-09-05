// Vlad's Chronicles

const tpBooks = {
    author: 'T.T.Rider',
    lib: '/lib',
    url: '/tp',
    series: `The Puzzle`,
    bookTitle: `Book`,
    comingSoon: ['coming soon...'],
    books: [
    ],
    getBooks: function () {

        return this.books.map((book, index) => {

            const longName = `${this.series} - ${this.bookTitle} ${index + 1} - ${book.title} - ${this.author}`;
            return {
                index: index + 1,
                title: book.title,
                cover: `/lib/tp0${index+1}.png`,
                reader: `${longName}.epub`,
                readerUrl: `/tp/read.html?book=${index+1}`,
                downloads: [
                    {
                        'type': 'EPUB',
                        'url': `/lib/${longName}.epub`
                    },
                    {
                        'type': 'PDF',
                        'url': `/lib/${longName}.pdf`
                    }
                ]
            };



        })


    }
}

