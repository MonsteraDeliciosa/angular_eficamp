(function() {

  var app = angular.module('bankApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      // controller: 'LoginController',
      templateUrl: 'app/views/login.html'
    })
    // .when('/dashboard/:transferId', {
    //     controller: 'singleTransferController',
    //     templateUrl: 'app/views/transfer.html'
    // })
      .when('/transfers', {
      controller: 'DashboardController',
      templateUrl: 'app/views/dashboard.html'
    }).otherwise({redirectTo: '/'});
  });

  app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  });

}());
