export default class AuthorsListController {
  constructor ($rootScope, $localStorage, AuthorsService) {
    this.$rootScope = $rootScope;
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
}