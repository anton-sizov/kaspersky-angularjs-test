import BookFormController from './controller';
import './style.scss';

export default angular.module("library")
  .component("bookForm", {
    template: require("./template.html"),
    controller: BookFormController,
    controllerAs: 'bookFormCtrl'
  }).name;