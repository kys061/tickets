angular.module('app').controller('mvTicketCreateCtrl', function($scope, mvTicket, mvNotifier, mvIdentity, mvTicketService, $location, Upload, $timeout) {
    $scope.user = mvIdentity.currentUser;
    //$scope.uploader = new FileUploader();
    //console.log($scope.uploader);
    //$scope.uploader.alias = 'zion';
    $scope.create = function(file) {
        var newTicketData = {
            title: $scope.title,
            contents: $scope.contents,
            img_path: "",
            type: $scope.type,
            user_id: $scope.user_id,
            company: $scope.company,
        };

        console.log(newTicketData);
        mvTicketService.createTicket(newTicketData, file).then(function(res) {
            mvNotifier.notify('Ticket created!');
            console.log("response:");
            console.log(res);
            if(res.data) {
                $location.path('/tickets/' + res.data._id);
            } else {
                $location.path('/tickets/' + res._id);
            }
        }, function(reason) {
            mvNotifier.error(reason);
        })



    };

    // upload later on form submit or something similar
    $scope.uploadPic = function(file) {

        file.upload = Upload.upload({
            url: 'http://localhost:3030/api/tickets',
            data: { file: file }
        });

        file.upload.then(function (response) {
            $timeout(function () {
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }

})