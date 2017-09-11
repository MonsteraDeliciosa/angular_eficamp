(function() {

  var TransfersController = function($scope, $log, $window, transfersFactory, appSettings) {
    // $scope.sortBy = 'name';
    // $scope.reverse = false;
    $scope.transfers = [];
    $scope.appSettings = appSettings;

    function init() {
      transfersFactory.getTransfers().then(function(response) {
        $scope.transfers = response.data.content;
      }, function(data, status, headers, config) {
        $log.log(data.error + ' ' + status);
      });
    }

    init();

    $scope.showDetails = function(id) {
      console.log(id);
    }

    // $scope.doSort = function(propName) {
    //   $scope.sortBy = propName;
    //   $scope.reverse = !$scope.reverse;
    // };
    //
    // $scope.deleteTransfer = function(transferId) {
    //   transfersFactory.deleteTransfer(transferId).then(function(response) {
    //     var status = response.data;
    //     if (status) {
    //       for (var i = 0, len = $scope.transfers.length; i < len; i++) {
    //         if ($scope.transfers[i].id === transferId) {
    //           $scope.transfers.splice(i, 1);
    //           break;
    //         }
    //       }
    //     } else {
    //       $window.alert('Unable to delete transfer');
    //     }
    //
    //   }, function(data, status, headers, config) {
    //     $log.log(data.error + ' ' + status);
    //   });
    // };
  };

  TransfersController.$inject = ['$scope', '$log', '$window', 'transfersFactory', 'appSettings'];

  angular.module('bankApp').controller('TransfersController', TransfersController);

}());
