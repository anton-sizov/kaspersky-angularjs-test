export default class LibraryHeaderController {
  constructor ($rootScope, $localStorage) {
    this.$rootScope = $rootScope;
    this.$localStorage = $localStorage;
  }

  initStorage () {
    this.$localStorage.$init({
      authors: [
        {id: 1, first_name: 'Author', last_name: '#1'},
        {id: 2, first_name: 'Author', last_name: '#2'},
        {id: 3, first_name: 'Author', last_name: '#3'}
      ],
      books: [
        {id: 1, name: 'Book #1', published: 1912},
        {id: 2, name: 'Book #2', published: 2012},
        {id: 3, name: 'Book #3', published: 1812}],
      authorLastIndex: 3,
      bookLastIndex: 3,
      filter: {
        name: '#1'
      }
    })

    this.$rootScope.$broadcast('localStorageInitialized', true);
  }
}