(function() {

  var DashboardController = function($scope, $log, $window, transfersFactory, appSettings, $http) {
    $scope.appSettings = appSettings;
    $scope.balance;
    $scope.funds;
    $scope.payments;

    function init() {
      $http
        .get('https://efigence-camp.herokuapp.com/api/data/summary')
        .then(function onSuccess(response) {
          $scope.balance = response.data.content[0].balance;
          $scope.funds = response.data.content[0].funds;
          $scope.payments = response.data.content[0].payments;
        })
        .catch(function onError(response) {
          console.log('error');
        });
    }

    init();

  };

  DashboardController.$inject = ['$scope', '$log', '$window', 'transfersFactory', 'appSettings', '$http'];

  angular.module('bankApp').controller('DashboardController', DashboardController);

}());
