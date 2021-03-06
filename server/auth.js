const passport = require('passport');
// super important that you use "username" in the body.
exports.authenticate = function (req, res, next) {
    req.body.username = req.body.username.toLowerCase();
    const auth = passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.sendStatus(403);
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            res.send({success: true, user: user});
        })
    })
    auth(req, res, next);
};
exports.getCurrentIdentity = function (req, res, next) {
    res.status(200).send(req.user);
    res.end();
}
exports.requiresApiLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(403);
        res.end();
    } else {
        next();
    }
};
exports.requiresRole = function (role) {
    return function (req, res, next) {
        if (!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
            res.status(403);
            res.end();
        } else {
            next();
        }
    }
}
