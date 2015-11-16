angular.module('app').controller('mvTicketDetailCtrl', function($scope, mvTicket, mvNotifier, mvIdentity, mvTicketService, mvComment, $routeParams, $location) {
    //$scope.ticket = mvTicket.get({_id:$routeParams.id}, function(ticket){
    //    return ticket;
    //});
    // mvCachedCourses.query returns array but that array exposes a promise that will resolve
    // when the data comes back, and that's contained in the $promise property


    mvTicket.query().$promise.then(function(collection) {
        collection.forEach(function(ticket) {
            if(ticket._id === $routeParams.id) {
                $scope.ticket = ticket;
                mvComment.query().$promise.then(function(collection) {
                    console.log("collection:");
                    console.log(collection);
                    var i = 0;
                    $scope.comments = [];
                    collection.forEach(function(comment) {
                        console.log("comments:");
                        if(comment.ticket_id === $scope.ticket._id) {
                            $scope.comments[i] = comment;
                            i = i + 1;
                            console.log($scope.comments);
                        }
                    })
                })
            }
        })
    })


    //mvComment.query().$promise.then(function(collection) {
    //    collection.forEach(function(comment) {
    //       console.log($scope.ticket._id);
    //        if(comment.ticket_id === $scope.ticket._id) {
    //            $scope.comments = [];
    //            $scope.comments = comment;
    //        }
    //    })
    //})

    $scope.user = mvIdentity.currentUser;

    $scope.createComment = function() {
        mvTicket.query().$promise.then(function(collection) {
            collection.forEach(function(ticket) {
                if(ticket._id === $routeParams.id) {
                    $scope.ticket = ticket;
                    var newCommentData = {
                        contents: $scope.contents,
                        user_id: $scope.user_id,
                        company: $scope.company,
                        ticket_id: $scope.ticket._id
                    };
                    mvTicketService.createComment(newCommentData).then(function(res) {
                        mvNotifier.notify('Comment created!');
                        //console.log("response:");
                        //console.log(res);
                        $scope.result = res;
                        newCommentData.published = $scope.result.published;
                        //console.log("$scope.comments");
                        //console.log($scope.comments);
                        $scope.comments.push(newCommentData);
                        $scope.refreshComment();
                        $location.path('/tickets/'+res.ticket_id);
                    }, function(reason) {
                        mvNotifier.error(reason);
                    })
                }
            })
        })

    $scope.refreshComment = function() {
        $scope.contents = "";
        $scope.user_id = "";
        $scope.company = "";
    }


    };
});