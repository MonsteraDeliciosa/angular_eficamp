(function() {
    var transfersFactory = function($http) {

        var factory = {};

        factory.getTransfers = function() {
            return $http.get('https://efigence-camp.herokuapp.com/api/data/history');
        };

        // factory.getTransfer = function(transferId) {
        //   let data =  $http.get('https://efigence-camp.herokuapp.com/api/data/history');
        //   let transfers = data.content;
        //
        //   return transfers.filter(transfer => transfer.id === transferId);
        // };

        // factory.getOrders = function() {
        //     return $http.get('/orders');
        // }
        //
        // factory.deleteCustomer = function(customerId) {
        //     return $http.delete('/customers/' + customerId);
        // }

        return factory;
    };

    transfersFactory.$inject = ['$http'];

    angular.module('bankApp').factory('transfersFactory',
                                           transfersFactory);

}());
