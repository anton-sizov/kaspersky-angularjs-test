export default class AuthorsListController {
  constructor ($rootScope, $state, $localStorage, AuthorsService) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.AuthorsService = AuthorsService;
  }

  $onInit () {
    this.loadAuthors();

    this.$rootScope.$on('localStorageInitialized', () => {
      this.loadAuthors();
    })
  }

  loadAuthors () {
    this.authors = this.AuthorsService.getAuthors();
  }

  deleteAuthor (authorId) {
    this.AuthorsService.deleteAuthor(authorId);
    this.loadAuthors();
  }

  goToAuthor (authorId) {
    this.$state.go('author-form', {id: authorId});
  } 
}