var Comment = require('mongoose').model('Comment');

exports.getComments = function(req, res) {
    Comment.find({}).exec(function(err, collection) {
        //console.log(collection);
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
    //var CommentData = req.body;
    console.log("req.body : ");
    console.log(req.body); // form fields
    if (req.body.newCommentData) {
        var CommentData = {
            contents: req.body.newCommentData.contents,
            img_path: "",
            user_id: req.body.newCommentData.user_id,
            company: req.body.newCommentData.company,
            ticket_id: req.body.newCommentData.ticket_id
        };
        //console.log("req.body : ");
        //console.log(req.body); // form fields
        //console.log("req.file : ");
        //console.log(req.file); // form files
        CommentData.img_path = req.file.path.slice(7,37);
    } else {
        var CommentData = req.body;
    }


    console.log("req.body : ");
    console.log(req.body); // form fields
    console.log("req.file : ");
    console.log(req.file); // form files
    console.log(CommentData);

    Comment.create(CommentData, function(err, comment) {  // err is the error that mongodb can create.
        if(err) {
            //console.log(err);
            res.status(400);
            return res.send({reason:err.toString()});
        }
        //console.log(comment);
        res.send(comment);
    })
};