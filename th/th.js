// Vlad's Chronicles

const thBooks = {
  author: "T.T.Rider",
  lib: "/lib",
  url: "/th",
  //series: `The Hitchhiker`,
  bookTitle: `The Hitchhiker`,
  // comingSoon: [],
  books: [
    {
      title: "The Hitchhiker",
    },
  ],
  getBooks: function () {
    return this.books.map((book, index) => {
      const longName = !this.series
        ? `${this.bookTitle} - ${this.author}`
        : `${this.series} - ${this.bookTitle} ${index + 1} - ${book.title} - ${
            this.author
          }`;
      return {
        index: index + 1,
        title: book.title,
        cover: `/lib/th0${index + 1}.png`,
        reader: `${longName}.epub`,
        readerUrl: `/th/read.html?book=${index + 1}`,
        downloads: [
          {
            type: "EPUB",
            url: `/lib/${longName}.epub`,
          },
          {
            type: "PDF",
            url: `/lib/${longName}.pdf`,
          },
        ],
      };
    });
  },
};
