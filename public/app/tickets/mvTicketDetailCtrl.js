angular.module('app').controller('mvTicketDetailCtrl', function($scope, mvTicket, mvNotifier, mvIdentity, $routeParams) {
    //$scope.ticket = mvTicket.get({_id:$routeParams.id})
    // mvCachedCourses.query returns array but that array exposes a promise that will resolve
    // when the data comes back, and that's contained in the $promise property
    mvTicket.query().$promise.then(function(collection) {
        collection.forEach(function(ticket) {
            if(ticket._id === $routeParams.id) {
                $scope.ticket = ticket;
            }
        })
    })
});