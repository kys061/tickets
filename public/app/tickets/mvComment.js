angular.module('app').factory('mvComment', function($resource) {
    var CommentResource = $resource('/api/comments/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return CommentResource;
});