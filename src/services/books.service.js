class BooksService {
  constructor ($localStorage) {
    this.$localStorage = $localStorage;
  }

  getBooks() {
    let authors = this.$localStorage.$getItem('authors');
    let books = this.$localStorage.$getItem('books');

    return books.filter(book => {
      if (book.circulation_date) {
        book.circulation_date = new Date(book.circulation_date);
      }
      return true;
    });
  }

  getOrder() {
    return this.$localStorage.$getItem('order');
  }

  getBook(bookId) {
    let book = this.$localStorage.$getItem('books').find(book => book.id == bookId);
    if (book.circulation_date) {
      book.circulation_date = new Date(book.circulation_date);
    }

    return book;
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

    return book;
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