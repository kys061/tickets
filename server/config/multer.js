var multer  = require('multer');

module.exports = function (config){
    var uploading = multer({ dest: config.rootPath });
}



