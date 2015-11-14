angular.module('app').factory('mvTicket', function($resource) {
    var TicketResource = $resource('/api/tickets/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return TicketResource;
});