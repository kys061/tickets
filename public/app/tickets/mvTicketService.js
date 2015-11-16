angular.module('app').factory('mvTicketService', function($http, mvIdentity, $q, mvTicket, mvComment) {
    return {
        createTicket: createTicket,
        createComment: createComment
    }

    function createTicket(newTicketData) {
        var newTicket = new mvTicket(newTicketData);
        var dfd = $q.defer();

        newTicket.$save().then(function(res){
            //mvIdentity.currentUser = newUser;
            //console.log(res);
            dfd.resolve(res);
        }, function(response) {
            dfd.reject(response.data.reason);
        });

        return dfd.promise;
    }

    function createComment(newCommentData) {
        var newComment = new mvComment(newCommentData);
        var dfd = $q.defer();

        newComment.$save().then(function(res){
            //mvIdentity.currentUser = newUser;
            //console.log(res);
            dfd.resolve(res);
        }, function(response) {
            dfd.reject(response.data.reason);
        });

        return dfd.promise;
    }
});