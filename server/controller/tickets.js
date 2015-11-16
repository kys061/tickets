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