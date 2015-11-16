var Comment = require('mongoose').model('Comment');

exports.getComments = function(req, res) {
    Comment.find({}).exec(function(err, collection) {
        console.log(collection);
        if(err) {console.log(err);}
        res.send(collection);
    })
};

//exports.getCommentById = function(req, res) {
//    Comment.find({ _id:req.params.id }).exec(function(err, comment) {
//        if(err) {console.log(err);}
//        res.send(comment);
//    })
//};

exports.createComment = function(req, res) {
    var CommentData = req.body;
    console.log(CommentData);
    Comment.create(CommentData, function(err, comment) {  // err is the error that mongodb can create.
        if(err) {
            console.log(err);
            res.status(400);
            return res.send({reason:err.toString()});
        }
        console.log(comment);
        res.send(comment);
    })
};