import BooksListController from './controller';
import './style.scss';

export default angular.module("library")
  .component("booksList", {
    template: require("./template.html"),
    controller: BooksListController,
    controllerAs: 'booksListCtrl'
  }).name;