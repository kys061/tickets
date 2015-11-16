var passport = require('passport');

exports.authenticate = function(req, res, next) {
    if(req.body.username){
    req.body.username = req.body.username.toLowerCase();
    }
    var auth = passport.authenticate('local', function(err, user) {
        //console.log("user in auth.js");
        //console.log(user);
        if(err) {return next(err);}
        if(!user) { res.send({success:false})}
        req.login(user, function(err) {
            if(err) {return next(err);}
            res.send({success:true, user: user});
        })
    })
    auth(req, res, next);
};

exports.requiresApiLogin = function(req, res, next) {
    if(!req.isAuthenticated()){
        var err = new Error('로그인 없이는 티켓을 확인 할 수 없습니다!');
        res.status(403);
        //res.end();
        return res.send({reason:err.toString()});
    } else {
        next();
    }
};

exports.requiresRole = function(role) {
    return function(req, res, next) {
        if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
            var err = new Error('로그인 없이는 티켓을 확인 할 수 없습니다!');
            res.status(403);
            //res.end();
            return res.send({reason:err.toString()});
        } else {
            next();
        }
    }
}