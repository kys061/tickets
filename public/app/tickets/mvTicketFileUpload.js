angular.module('app').factory('mvTicketFileUpload', function($resource) {
    var UploadResource = $resource('/api/tickets/upload/:id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return UploadResource;
});