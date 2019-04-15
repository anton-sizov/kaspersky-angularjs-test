class BooksService {
  constructor ($localStorage) {
    this.$localStorage = $localStorage;
  }

  getBooks() {
    let authors = this.$localStorage.$getItem('authors');
    let books = this.$localStorage.$getItem('books');

    return books;
  }

  getOrder() {
    return this.$localStorage.$getItem('order');
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

  saveOrder (order) {
    this.$localStorage.$setItem('order', order);
  }

  deleteBook(bookId) {
    let books = this.$localStorage.$getItem('books').filter(book => book.id != bookId);
    this.$localStorage.$setItem('books', books);
  }
}

export default angular.module('library')
  .service('BooksService', BooksService).name;