export default class AuthorsListController {
  constructor ($localStorage, AuthorsService) {
    this.$localStorage = $localStorage;
    this.AuthorsService = AuthorsService;

    this.title = 'Authors List';
    this.authors = this.AuthorsService.getAuthors();
  }

  initStorage() {
    this.$localStorage.$init({
      authors: [
        {id: 1, first_name: 'Author', last_name: '#1'},
        {id: 2, first_name: 'Author', last_name: '#2'},
        {id: 3, first_name: 'Author', last_name: '#3'}
      ],
      authorLastIndex: 3
    })
    this.authors = this.AuthorsService.getAuthors();
  }
}