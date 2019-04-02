import AuthorsListState from './authors/authors-list.state';
import AuthorFormState from './authors/author-form.state';

import BooksListState from './books/books-list.state';
import BookFormState from './books/book-form.state';

"ngInject";
export default angular.module('library')
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state(AuthorsListState);
    $stateProvider.state(AuthorFormState);

    $stateProvider.state(BooksListState);
    $stateProvider.state(BookFormState);
    
    $urlRouterProvider.otherwise('/');
  });