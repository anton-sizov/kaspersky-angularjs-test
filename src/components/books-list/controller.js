export default class BooksListController {
  constructor ($rootScope, $state, $localStorage, BooksService) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.BooksService = BooksService;
  }

  $onInit () {
    this.filter = {};

    this.loadBooks();
    this.loadFilter();

    this.$rootScope.$on('localStorageInitialized', () => {
      this.loadBooks();
      this.loadFilter();
    })
  }

  $doCheck () {
    if (this.filter.name !== this.oldFilter.name || this.filter.published != this.oldFilter.published) {
      this.BooksService.saveFilter(this.filter);
      this.oldFilter = angular.copy(this.filter);
    }
  } 

  $onDestroy () {
    this.BooksService.saveFilter(this.filter);
  }

  loadBooks () {
    this.books = this.BooksService.getBooks();
  }

  loadFilter () {
    this.filter = this.BooksService.getFilter();
    this.oldFilter = angular.copy(this.filter);
  }

  deleteBook (bookId) {
    this.BooksService.deleteBook(bookId);
    this.loadBooks();
  }

  goToBook (bookId) {
    this.$state.go('book-form', { id: bookId });
  }
}