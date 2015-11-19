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
    if (req.body.newTicketData) {
        var ticketData = {
            title: req.body.newTicketData.title,
            contents: req.body.newTicketData.contents,
            img_path: "",
            type: req.body.newTicketData.type,
            user_id: req.body.newTicketData.user_id,
            company: req.body.newTicketData.company
        };
        //console.log("req.body : ");
        //console.log(req.body); // form fields
        //console.log("req.file : ");
        //console.log(req.file); // form files
        ticketData.img_path = req.file.path.slice(7,37);
    } else {
        var ticketData = req.body;
    }


    console.log("req.body : ");
    console.log(req.body); // form fields
    console.log("req.file : ");
    console.log(req.file); // form files
    //console.log("req.file.path : ");
    //console.log(req.file.path);
    //console.log("ticketData.img_path : ");
    //console.log(ticketData.img_path);
    //console.log("ticketData : ");
    //console.log(ticketData);

    //public/uploads/img/file-1447910826800
    //console.log(req);// form files
    Ticket.create(ticketData, function(err, ticket) {  // err is the error that mongodb can create.
        if(err) {
            //console.log("ERROR:");
            //console.log(err.toString().indexOf('E11000'));
            //if(err.toString().indexOf('E11000') > -1) {
            //    err = new Error('Duplicate Username');
            //}
            //console.log(err);
            res.status(400);
            return res.send({reason:err.toString()});
        }
        //console.log(ticket);
        res.send(ticket);
        //req.logIn(user, function(err) {
        //    if(err) {return next(err);}
        //    res.send(user);
        //})
    })
};

exports.updateTicket = function(req, res) {
    var ticketUpdates = req.body;
    console.log(ticketUpdates);
    Ticket.findOneAndUpdate({ _id: ticketUpdates._id}, ticketUpdates, function(err, ticket){
        if(err) {
            return res.send({reason:err.toString()});
        }
        console.log(ticket);
        res.send(ticket);
    });
}

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