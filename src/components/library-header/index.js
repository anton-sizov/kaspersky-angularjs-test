import LibraryHeaderController from './controller';
import './style.scss';

export default angular.module("library")
  .component("libraryHeader", {
    template: require("./template.html"),
    controller: LibraryHeaderController,
    controllerAs: 'libraryHeaderCtrl'
  }).name;