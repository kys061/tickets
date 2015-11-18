angular.module('app').factory('mvTicketService', function($http, mvIdentity, $q, mvTicket, mvComment) {
    return {
        createTicket: createTicket,
        createComment: createComment,
        updateType: updateType
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

    function updateType(newTypeData) {
        var dfd = $q.defer();
        var clone = new mvTicket(newTypeData);
        //var clone = angular.copy(mvIdentity.currentUser);
        //angular.extend(clone, newTypeData);
        clone.$update().then(function() {
            dfd.resolve();
        }, function(response) {
            dfd.reject(response.data.reason);
        });
        return dfd.promise;
    }
});