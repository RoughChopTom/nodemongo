let passport = require('passport');
let mongoose = require('mongoose');
let User = mongoose.model('User');

let sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    User.findOne({email: req.body.email}, (err, user) => {
        if (user) {
            sendJSONresponse(res, 200, {
                "message": "Email already registered, use another"
            });
        } else {
            let user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.setPassword(req.body.password);
            user.save(function () {
                let token;
                token = user.generateJwt();
                res.status(200);
                res.json({
                    "token": token
                });
            });
        }
    });
};

module.exports.login = function (req, res) {
    if (!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }

    passport.authenticate('local', function (err, user, info) {
        let token;
        if (err) {
            res.status(404).json(err);
            return;
        }
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};