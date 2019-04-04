export default class BooksListController {
  constructor ($rootScope, $localStorage, BooksService) {
    this.$rootScope = $rootScope;
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
}