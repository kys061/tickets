angular.module('app').controller('mvTicketCreateCtrl', function($scope, mvTicket, mvNotifier, mvIdentity, mvTicketService, $location) {
    $scope.user = mvIdentity.currentUser;
    $scope.create = function() {
        var newTicketData = {
            title: $scope.title,
            contents: $scope.contents,
            type: $scope.type,
            user_id: $scope.user_id,
            company: $scope.company
        };

        mvTicketService.createTicket(newTicketData).then(function(res) {
            mvNotifier.notify('Ticket created!');
            //console.log("response:");
            //console.log(res);
            $location.path('/tickets/'+res._id);
        }, function(reason) {
            mvNotifier.error(reason);
        })
    };



})