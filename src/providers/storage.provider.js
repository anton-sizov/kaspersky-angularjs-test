class LocalStorageProvider {
  constructor () {
    this.$storage = {
      $init: function (data) {
        for (let key in data) {
          this.$setItem(key, data[key]);
        }
      },

      $getItem: function (key) {
        return deserializer(localStorage.getItem(key));
      },

      $setItem: function (key, data) {
        localStorage.setItem(key, serializer(data));
      }
    };

    function serializer(data) {
      return JSON.stringify(data);
    }

    function deserializer(data) {
      return JSON.parse(data);
    }
  }

  $get() {
    return this.$storage;  
  }
}

export default angular.module("library")
  .provider('$localStorage', LocalStorageProvider)
  .name;