angular.module('app').controller('mvSignupCtrl', function($scope, mvAuth, mvNotifier, $location) {

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname,
            company: $scope.company
        };

        mvAuth.createUser(newUserData).then(function() {
            mvNotifier.notify('User account created!');
            $location.path('/');
        }, function(reason) {
            mvNotifier.error(reason);
        })
    }

})