(function() {

  var LoginController = function($scope, $log, $window, $http, $httpParamSerializerJQLike) {
    $scope.knownUser = true;
    $scope.knownUserClass = 'known user-img';
    $scope.loginError = false;
    $scope.errorMessage;

    $scope.changeUser = function() {
      $scope.knownUser = false;
      $scope.knownUserClass = 'unknown user-img';

      $scope.loginError = false;
      $scope.errorMessage;
    };

    $scope.postLogin = function() {

      if ($scope.knownUser) {
        $http({
          url: 'https://efigence-camp.herokuapp.com/api/login',
          method: "POST",
          data: $httpParamSerializerJQLike({login: 'efi', password: document.getElementById('password').value}),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function onSuccess(response) {

          $scope.loginError = false;
          $scope.errorMessage;

          $window.location.href = '#/transfers';

        }).catch(function onError(response) {

          var data = response.data;
          var dataStatus = data.status;
          var dataMessage = data.message;
          var status = response.status;
          var statusText = response.statusText;
          var headers = response.headers;
          var config = response.config;

          console.log('dataStatus', dataStatus);
          console.log('dataMessage', dataMessage);

          console.log('status', status);
          console.log('statusText', statusText);
          console.log('config', config);

          $log.log(data.error + ' ' + status);

          $scope.loginError = true;
          $scope.errorMessage = dataMessage;

        });

      } else {
        $http({
          url: 'https://efigence-camp.herokuapp.com/api/login',
          method: "POST",
          data: $httpParamSerializerJQLike({login: document.getElementById('name').value, password: document.getElementById('password').value}),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function onSuccess(response) {

          $scope.loginError = false;
          $scope.errorMessage;

          $window.location.href = '#/transfers';

        }).catch(function onError(response) {

          var data = response.data;
          var dataStatus = data.status;
          var dataMessage = data.message;
          var status = response.status;
          var statusText = response.statusText;
          var headers = response.headers;
          var config = response.config;

          console.log('dataStatus', dataStatus);
          console.log('dataMessage', dataMessage);

          console.log('status', status);
          console.log('statusText', statusText);
          console.log('config', config);

          $log.log(data.error + ' ' + status);

          $scope.loginError = true;
          $scope.errorMessage = dataMessage;

        });
      }
    }

  };

  LoginController.$inject = ['$scope', '$log', '$window', '$http', '$httpParamSerializerJQLike'];

  angular.module('bankApp').controller('LoginController', LoginController);

}());
