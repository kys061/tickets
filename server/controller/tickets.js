var Ticket = require('mongoose').model('Ticket');

exports.getTickets = function(req, res) {
    Ticket.find({}).exec(function(err, collection) {
        if(err) {console.log(err);}
        res.send(collection);
    })
};

exports.getTicketById = function(req, res) {
    Ticket.find({ _id:req.params.id }).exec(function(err, ticket) {
        if(err) {console.log(err);}
        res.send(ticket);
    })
};

exports.createTicket = function(req, res, next) {
    var ticketData = req.body;
    console.log(ticketData);
    //ticketData.username = userData.username.toLowerCase();
    //ticketData.salt = encrypt.createSalt();
    //userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
    Ticket.create(ticketData, function(err, ticket) {  // err is the error that mongodb can create.
        if(err) {
            //console.log("ERROR:");
            //console.log(err.toString().indexOf('E11000'));
            //if(err.toString().indexOf('E11000') > -1) {
            //    err = new Error('Duplicate Username');
            //}
            console.log(err);
            res.status(400);
            return res.send({reason:err.toString()});
        }
        console.log(ticket);
        res.send(ticket);
        //req.logIn(user, function(err) {
        //    if(err) {return next(err);}
        //    res.send(user);
        //})
    })
};

exports.createComment = function(req, res, next) {
    var commentData = req.body;
    console.log(commentData);

    //Ticket.create(commentData, function(err, ticket) {  // err is the error that mongodb can create.
    //    if(err) {
    //        //console.log("ERROR:");
    //        //console.log(err.toString().indexOf('E11000'));
    //        //if(err.toString().indexOf('E11000') > -1) {
    //        //    err = new Error('Duplicate Username');
    //        //}
    //        console.log(err);
    //        res.status(400);
    //        return res.send({reason:err.toString()});
    //    }
    //    console.log(ticket);
    //    res.send(ticket);
    //    //req.logIn(user, function(err) {
    //    //    if(err) {return next(err);}
    //    //    res.send(user);
    //    //})
    //})
};