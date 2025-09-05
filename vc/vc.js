// Vlad's Chronicles

const vcBooks = {
    author: 'T.T.Rider',
    lib: '/lib',
    url: '/vc',
    series: `Vlad's Chronicles`,
    bookTitle: `Episode`,
    comingSoon: ['the final episode','is coming on','Christmas 2025'],
    books: [
        {
            title: 'Vlad and the Big G-Nubz',
        },
        {
            title: 'Vlad and the King',
        },
        {
            title: 'Vlad and the Accidental Bride',
        },
        {
            title: 'Vlad and the Asgoikyos Dilemma',
        },
        {
            title: 'Vlad and the Queen',
        }
    ],
    getBooks: function () {

        return this.books.map((book, index) => {

            const longName = `${this.series} - ${this.bookTitle} ${index + 1} - ${book.title} - ${this.author}`;
            return {
                index: index + 1,
                title: book.title,
                cover: `/lib/vc0${index+1}.png`,
                reader: `${longName}.epub`,
                readerUrl: `/vc/read.html?book=${index+1}`,
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

