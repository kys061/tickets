angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, mvTicket, $location, $window) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
            if(success){
                var loop = 0;
                mvNotifier.notify('You have successfully signed in!');
                $window.setInterval(function() {
                    if(loop == 0) {
                        $window.location.reload();
                    }
                    loop = 1;
                }, 200)
            } else {
                mvNotifier.notify('Username/Password combination incorrect');
            }
        })
    }

    $scope.signout = function() {
        mvAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('You have successfully signed out!');
            var loop = 0;
            $window.setInterval(function() {
                if(loop == 0){
                    $window.location.reload();
                }
                loop = 1;
            }, 200)
            $location.path('/');
        })
    }

})