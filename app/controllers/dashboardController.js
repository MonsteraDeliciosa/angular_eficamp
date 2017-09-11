(function() {

  var DashboardController = function($scope, $log, $window, transfersFactory, appSettings, $http) {
    // $scope.transfers = [];
    $scope.appSettings = appSettings;
    $scope.balance;
    $scope.funds;
    $scope.payments;


    function init() {
     $http
        .get('https://efigence-camp.herokuapp.com/api/data/summary')
        .then(function onSuccess(response) {
            // console.log(response);

            $scope.balance = response.data.content[0].balance;
            $scope.funds = response.data.content[0].funds;
            $scope.payments = response.data.content[0].payments;

            console.log('balance', $scope.balance);
            console.log('funds', $scope.funds);
            console.log('payments', $scope.payments);


        })
        .catch(function onError(response) {
            console.log('error');
        });


    }

    init();

    $scope.showDetails = function(id) {
      console.log(id);
    }
  };

  DashboardController.$inject = ['$scope', '$log', '$window', 'transfersFactory', 'appSettings', '$http'];

  angular.module('bankApp').controller('DashboardController', DashboardController);

}());
