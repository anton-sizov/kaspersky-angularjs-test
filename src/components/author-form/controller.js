export default class AuthorFormController {
  constructor ($state, $stateParams, AuthorsService) {
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.AuthorsService = AuthorsService;

    this.author = {
      id: null,
      first_name: '',
      last_name: ''
    }
  }

  $onInit() {
    if (this.$stateParams.id) {
      this.author = this.AuthorsService.getAuthor(this.$stateParams.id);
    }
  }

  saveAuthor(form) {
    if (form.$valid) {
      this.author = this.AuthorsService.saveAuthor(this.author);
      this.$stateParams.go('author-form', {id: this.author.id});
    }
  }

  deleteAuthor() {
    if (this.author.id) {
      this.AuthorsService.deleteAuthor(this.author.id);
      this.authorDeleted = true;
    }
  }
}