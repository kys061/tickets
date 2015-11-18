angular.module('app').controller('mvTicketDetailCtrl', function($scope, mvTicket, mvNotifier, mvIdentity, mvTicketService, mvComment, $routeParams, $location) {
    //$scope.ticket = mvTicket.get({_id:$routeParams.id}, function(ticket){
    //    return ticket;
    //});
    // mvCachedCourses.query returns array but that array exposes a promise that will resolve
    // when the data comes back, and that's contained in the $promise property

    $scope.identity = mvIdentity;

    mvTicket.query().$promise.then(function(collection) {
        collection.forEach(function(ticket) {
            if(ticket._id === $routeParams.id) {
                $scope.ticket = ticket;
                console.log($scope.ticket);
                $scope.changetype = {
                    _id: $scope.ticket._id,
                    title: $scope.ticket.title,
                    contents: $scope.ticket.contents,
                    user_id: $scope.ticket.user_id,
                    company: $scope.ticket.company

                };

                mvComment.query().$promise.then(function(collection) {
                    //console.log("collection:");
                    //console.log(collection);
                    var i = 0;
                    $scope.comments = [];
                    collection.forEach(function(comment) {
                        //console.log("comments:");
                        if(comment.ticket_id === $scope.ticket._id) {
                            $scope.comments[i] = comment;
                            i = i + 1;
                            //console.log($scope.comments);
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

    //$scope.ticket_id = $scope.ticket._id;
    //$scope.title = $scope.ticket.title;
    //$scope.contents = $scope.ticket.contents;
    //$scope.user_id = $scope.ticket.user_id;
    //$scope.company = $scope.ticket.company;

    $scope.update = function() {
        var newTypeData = {
            _id: $scope.changetype._id,
            title: $scope.changetype.title,
            contents: $scope.changetype.contents,
            type: $scope.change_type,
            user_id: $scope.changetype.user_id,
            company: $scope.changetype.company
        };

        mvTicketService.updateType(newTypeData).then(function() {
            mvNotifier.notify('티켓 상태가 ' + newTypeData.type + '로 변경되었습니다!!!');
            $location.path('/tickets');
        })
    }
});