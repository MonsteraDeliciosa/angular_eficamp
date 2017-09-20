(function() {
  var dashboardFactory = function($http) {

    var factory = {};

    factory.getSummary = function() {
      return $http.get('https://efigence-camp.herokuapp.com/api/data/summary');
    };

    factory.getTransfers = function() {
      return $http.get('https://efigence-camp.herokuapp.com/api/data/history');
    };

    factory.getProducts = function() {
      return $http.get('https://efigence-camp.herokuapp.com/api/data/products');
    };

    return factory;
  };

  dashboardFactory.$inject = ['$http'];

  angular.module('bankApp').factory('dashboardFactory',
    dashboardFactory);

}());
