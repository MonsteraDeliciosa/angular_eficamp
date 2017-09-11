(function() {
    var transfersService = function() {
        var transfers = $http.get('https://efigence-camp.herokuapp.com/api/data/history');

        this.getTransfers = function() {
            return transfers;
        };

        this.getTransfer = function(customerId) {
            for (var i=0,len=transfers.length;i<len;i++) {
               if (transfers[i].id === parseInt(transferId)) {
                   return transfers[i];
               }
            }
            return {};
        };

    };

    angular.module('bankApp').service('transfersService', transfersService);

}());
