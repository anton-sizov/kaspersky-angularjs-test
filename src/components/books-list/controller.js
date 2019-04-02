export default class BooksListController {
  constructor ($localStorage, BooksService) {
    this.$localStorage = $localStorage;
    this.BooksService = BooksService;

    this.title = 'Books List';
    this.books = this.BooksService.getBooks();
  }

  initStorage() {
    this.$localStorage.$init({
      books: [{id: 1, name: 'Book #1'}, {id: 2, name: 'Book #2'}, {id: 3, name: 'Book #3'}],
      bookLastIndex: 3
    })
    this.books = this.BooksService.getBooks();
  }
}