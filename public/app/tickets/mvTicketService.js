angular.module('app').factory('mvTicketService', function($http, mvIdentity, $q, mvTicket, mvComment, mvTicketFileUpload, Upload, $timeout) {
    return {
        createTicket: createTicket,
        createComment: createComment,
        updateType: updateType,
        uploadFile: uploadFile
    }

    function createTicket(newTicketData, file) {
        var newTicket = new mvTicket(newTicketData);
        var dfd = $q.defer();
        if (file !== undefined) {
            console.log(Upload.dataUrltoBlob(file));
            Upload.upload({
                url: 'http://localhost:3030/api/tickets',
                data: { newTicketData: newTicketData, file: Upload.dataUrltoBlob(file) }
            }).then(function (response) {
                dfd.resolve(response);
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    var errorMsg = response.status + ': ' + response.data;
                return errorMsg;
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            //file.upload = Upload.upload({
            //    url: 'http://localhost:3030/api/tickets',
            //    data: { newTicketData: newTicketData, file: file }
            //});
            //
            //file.upload.then(function (response) {
            //    dfd.resolve(response);
            //    $timeout(function () {
            //        file.result = response.data;
            //    });
            //}, function (response) {
            //    if (response.status > 0)
            //    var errorMsg = response.status + ': ' + response.data;
            //    return errorMsg;
            //}, function (evt) {
            //    // Math.min is to fix IE which reports 200% sometimes
            //    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            //}, function (response) {
            //    dfd.reject(response.data.reason);
            //});
        } else {
            newTicket.$save().then(function (res) {
                //mvIdentity.currentUser = newUser;
                console.log(res);
                dfd.resolve(res);
            }, function (response) {
                dfd.reject(response.data.reason);
            });
        }

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

    function uploadFile(newTicketData) {
        var mvFileUpload = new mvTicketFileUpload(newTicketData);
        var dfd = $q.defer();

        mvFileUpload.$save().then(function(res){
            //mvIdentity.currentUser = newUser;
            console.log(res);
            dfd.resolve(res);
        });

        return dfd.promise;
    }
});