export default class BookFormController {
  constructor ($state, $stateParams, BooksService, AuthorsService) {
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.BooksService = BooksService;
    this.AuthorsService = AuthorsService;

    this.book = {
      id: null,
      name: '',
      authors: [],
      pages: 0,
    }
  }

  $onInit() {
    this.loadAuthors();
    if (this.$stateParams.id) {
      this.book = this.BooksService.getBook(this.$stateParams.id);
    }
  }

  loadAuthors () {
    this.authors = this.AuthorsService.getAuthors();
  }

  addAuthor () {
    if (this.book.authors && this.selectedAuthor && !this.book.authors.filter(author => author.id == this.selectedAuthor.id).length) {
      this.book.authors.push(this.selectedAuthor);
    }

    this.selectedAuthor = null;
  }

  deleteAuthor (authorId) {
    this.book.authors = this.book.authors.filter(author => author.id != authorId);
  }

  saveBook(form) {
    if (form.$valid) {
      this.book = this.BooksService.saveBook(this.book);
      this.$state.go('book-form', {id: this.book.id});
    }
  }

  deleteBook() {
    if (this.book.id) {
      this.BooksService.deleteBook(this.book.id);
      this.bookDeleted = true;
    }
  }
}