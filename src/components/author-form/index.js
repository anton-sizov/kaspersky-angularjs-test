import AuthorFormController from './controller';
import './style.scss';

export default angular.module("library")
  .component("authorForm", {
    template: require("./template.html"),
    controller: AuthorFormController,
    controllerAs: 'authorFormCtrl'
  }).name;