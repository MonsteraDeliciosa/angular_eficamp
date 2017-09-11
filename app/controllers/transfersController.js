(function() {

  var TransfersController = function($scope, $log, $window, transfersFactory, appSettings) {
    $scope.transfers = [];
    $scope.appSettings = appSettings;
    $scope.activeId = null;

    function init() {
      transfersFactory.getTransfers().then(function(response) {
        $scope.transfers = response.data.content;
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

  TransfersController.$inject = ['$scope', '$log', '$window', 'transfersFactory', 'appSettings'];

  angular.module('bankApp').controller('TransfersController', TransfersController);

}());
