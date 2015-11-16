angular.module('app').controller('mvMainCtrl', function($scope, mvCourse, mvCachedCourses, mvTicket, mvIdentity){
    $scope.courses = mvCachedCourses.query();
    $scope.tickets = mvTicket.query();
    //$scope.courses = mvCourse.query();
    $scope.user = mvIdentity.currentUser;

    $scope.filterOptions =
    {
        open: "open",
        hold: "hold",
        close: "close"
    }

});