export default angular.module('library')
  .directive("imageLoader", [function () {
  return {
    scope: {
      imageLoader: "="
    },
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        if (!changeEvent.target.files.length) {
          return false;
        }

        if (changeEvent.target.files[0].size > 1024) {
          changeEvent.target.value = "";
          return false;
        }

        let reader = new FileReader();
        reader.onload = function (loadEvent) {
          scope.$apply(function () {
            scope.imageLoader(loadEvent.target.result);
          });
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
}]).name;