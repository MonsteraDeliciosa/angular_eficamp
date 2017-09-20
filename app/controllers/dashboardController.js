(function() {

  var DashboardController = function($scope, $log, $window, dashboardFactory, appSettings) {
    $scope.transfers = [];
    $scope.products = {};
    $scope.balance;
    $scope.funds;
    $scope.payments;
    $scope.appSettings = appSettings;
    $scope.activeId = null;

    function init() {

      dashboardFactory.getSummary().then(function(response) {
        $scope.balance = response.data.content[0].balance;
        $scope.funds = response.data.content[0].funds;
        $scope.payments = response.data.content[0].payments;
      }, function(data, status, headers, config) {
        $log.log(data.error + ' ' + status);
      });

      dashboardFactory.getTransfers().then(function(response) {
        $scope.transfers = response.data.content.reverse();
      }, function(data, status, headers, config) {
        $log.log(data.error + ' ' + status);
      });

      dashboardFactory.getProducts().then(function(response) {

        //TODO refactor

        $scope.products.wallets = response.data.content.filter(record => record.type === "Wallet")[0];
        $scope.products.wallets.img = 'img/wallets.png';
        $scope.products.deposits = response.data.content.filter(record => record.type === "Deposits")[0];
        $scope.products.deposits.img = 'img/deposits.png';
        $scope.products.accounts = response.data.content.filter(record => record.type === "Accounts")[0];
        $scope.products.accounts.img = 'img/accounts.png';
        $scope.products.funds = response.data.content.filter(record => record.type === "Funds")[0];
        $scope.products.funds.img = 'img/funds.png';
        $scope.products.loans = response.data.content.filter(record => record.type === "Bank loans")[0];
        $scope.products.loans.img = 'img/loans.png';
      }, function(data, status, headers, config) {
        $log.log(data.error + ' ' + status);
      });
    }

    init();

    $scope.toggleDetails = function($event, id) {

      if ($scope.activeId === id) {
        $scope.activeId = null;
        return;
      } else {
        $scope.activeId = id;
        return;
      }
    }

  };

  DashboardController.$inject = ['$scope', '$log', '$window', 'dashboardFactory', 'appSettings'];

  angular.module('bankApp').controller('DashboardController', DashboardController);

}());
