export default class BookFormController {
  constructor ($stateParams, BooksService, AuthorsService) {
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
      this.BooksService.saveBook(this.book);
    }
  }
}