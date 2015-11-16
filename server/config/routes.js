var auth = require('./auth'),
    mongoose = require('mongoose'),
    users = require('../controller/users'),
    courses = require('../controller/courses'),
    tickets = require('../controller/tickets'),
    comments = require('../controller/comments'),
    User = mongoose.model('User');
//LocalStrategy = require('passport-local').Strategy;


module.exports = function (app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.get('/api/courses', courses.getCourses);
    app.get('/api/courses/:id', courses.getCourseById);

    app.get('/api/tickets', auth.requiresApiLogin, tickets.getTickets);
    app.post('/api/tickets', auth.requiresApiLogin, tickets.createTicket);
    app.get('/api/tickets/:id', auth.requiresApiLogin, tickets.getTicketById);

    app.get('/api/comments', auth.requiresApiLogin, comments.getComments);
    app.post('/api/comments', auth.requiresApiLogin, comments.createComment);


    // when somebody requests /partials/main,
    // express is going to render the main.jade file inside the partials dir inside the views dir.
    // when request /partials/account/navbar-login, run ../../public/app/account/navbar-login.jade
    // it means * === account/navbar-login
    // because * has many routes and * === req.params ,
    // it is array and req.params[0] is many of them(request routes from client)
    app.get('/partials/*', function(req, res){
        //console.log(req.params);
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);
    app.post('/logout', function(req, res){
        req.logout();
        res.end();
    });

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res){
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
}