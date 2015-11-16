angular.module('app').factory('mvTicketService', function($http, mvIdentity, $q, mvTicket) {
    return {
        createTicket: createTicket
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
});