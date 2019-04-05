class BooksService {
  constructor ($localStorage) {
    this.$localStorage = $localStorage;
  }

  getBooks() {
    let authors = this.$localStorage.$getItem('authors');
    let books = this.$localStorage.$getItem('books');

    // books.array.forEach(book => {
    //   book.authors = authors.filter(author => book.authors.include(author.id));
    // });

    return books;
  }

  getFilter() {
    return this.$localStorage.$getItem('filter');
  }

  getBook(bookId) {
    return this.$localStorage.$getItem('books').find(book => book.id == bookId);
  }

  saveBook(book) {
    let books = this.$localStorage.$getItem('books');
    let lastIndex = this.$localStorage.$getItem('bookLastIndex');

    if (!book.id) {
      lastIndex += 1;
      book.id = lastIndex;
      books = [...books, book];
    } else {
      books = books.map(item => {
        return item.id === book.id ? book : item;
      })
    }

    this.$localStorage.$setItem('books', books);
    this.$localStorage.$setItem('bookLastIndex', lastIndex);
  }

  saveFilter (filter) {
    this.$localStorage.$setItem('filter', filter);
  }

  deleteBook(bookId) {
    let books = this.$localStorage.$getItem('books').filter(book => book.id != bookId);
    this.$localStorage.$setItem('books', books);
  }
}

export default angular.module('library')
  .service('BooksService', BooksService).name;