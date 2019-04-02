export default class BookFormController {
  constructor ($stateParams, BooksService) {
    this.$stateParams = $stateParams;

    this.BooksService = BooksService;

    this.book = {
      id: null,
      name: '',
      authors: [],
      pages: 0,
    }
  }

  $onInit() {
    if (this.$stateParams.id) {
      this.book = this.BooksService.getBook(this.$stateParams.id);
    }
  }

  saveBook(form) {
    if (form.$valid) {
      this.BooksService.saveBook(this.book);
    }
  }
}