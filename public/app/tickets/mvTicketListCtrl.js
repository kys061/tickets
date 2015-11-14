angular.module('app').controller('mvTicketListCtrl', function($scope, mvTicket, mvNotifier) {
     mvTicket.query().$promise.then(function(collection) {
         $scope.tickets = collection;
    }, function(err) {
        mvNotifier.error(err.data.reason);
    })
})
