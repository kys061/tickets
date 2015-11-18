angular.module('app').controller('mvTicketListCtrl', function($scope, mvTicket, mvNotifier, mvIdentity) {
     mvTicket.query().$promise.then(function(collection) {
         console.log(collection);
         $scope.tickets = collection;
         $scope.user = mvIdentity.currentUser;
         console.log($scope.user);
    }, function(err) {
        mvNotifier.error(err.data.reason);
    })

    $scope.identity=mvIdentity;

    $scope.sortOptions = [
        {value:"published", text: "Sort by Publish Date"},
        {value:"title", text: "Sort by Title"}
    ];

    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.currentPage = {
        open: 1,
        hold: 1,
        close: 1
    }

    $scope.pageSize = 5;
})
