import AuthorsListController from './controller';
import './style.scss';

export default angular.module("library")
  .component("authorsList", {
    template: require("./template.html"),
    controller: AuthorsListController,
    controllerAs: 'authorsListCtrl'
  }).name;