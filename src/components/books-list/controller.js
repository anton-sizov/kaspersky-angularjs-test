export default class BooksListController {
  constructor ($rootScope, $state, $localStorage, BooksService) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.BooksService = BooksService;

    this.title = 'Books List';
  }

  $onInit () {
    this.loadBooks();

    this.$rootScope.$on('localStorageInitialized', () => {
      this.loadBooks();
    })
  }

  loadBooks () {
    this.books = this.BooksService.getBooks();
  }

  deleteBook (bookId) {
    this.BooksService.deleteBook(bookId);
    this.loadBooks();
  }

  goToBook (bookId) {
    this.$state.go('book-form', { id: bookId });
  }
}