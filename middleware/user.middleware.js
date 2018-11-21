// Load user model.
const User = require('../models/Member');

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var constants = require('../modules/constants');
var jwt = require('jsonwebtoken');
var Web3 = require('web3');
var constants = require('../modules/constants');

//const bip39 = require('bip39');
// A middleware to check if posted signup data is valid or not.
exports.validateSignupData = async function (req, res, next) {
    console.log("middleware name",req.body.firstname );
    console.log("middleware lastname",req.body.lastname );
    console.log("dob",req.body.dob );
    console.log("phone",req.body.phone);
console.log("email",req.body.email );

    await User.findOne({'email': req.body.email}, function (err, user) {
        // Handle internal server error.
        if (err) {
            return res.status(500)
                    .json({
                        status: 500,
                        message: "Failed to signup. Internal server error."
                    });
        }

        // Send an error response if a user with this email already exists.
        if (user) {
            return res.status(400)
                    .json({
                        status: 400,
                        message: "Failed to signup. User with email " + req.body.email + " already exists."
                    });
        } else {
            // All ok. Move forward.
            next();
        }
    });
};
// A middleware to check if posted signin data is valid or not.
exports.validateSignInData = async function (req, res, next) {
    await User.findOne({'email': req.body.email}, function (err, user) {
// Handle internal server error.
        if (err) {
            return res.status(500)
                    .json({
                        status: 500,
                        message: "Failed to signup. Internal server error."
                    });
        }
        if (!user) {
            return res.status(401)
                    .json({
                        status: 401,
                        message: "User doesn't exist"
                    });
        }
// Send an error response if a user with this email already exists.
        if (user) {
            var obj = {};
            if (user.emailVerified == true) {
                if (user.isActive == true) {
                    if (bcrypt.compareSync(req.body.password, user.password) === true) {
                        var sessData = req.session;
                        obj.id = user.id;
                        obj.email = user.email;
                        obj.name = user.name;
                        obj.emailVerified = user.emailVerified;
                        obj.isActive = user.isActive;
                        sessData.userLogin = obj;
                        obj.error = 0;
                        obj.msg = "Login Successfully";
                    } else {
                        obj.error = 1;
                        obj.msg = "Invalid Password";
                    }
                } else {
                    obj.error = 1;
                    obj.msg = "User in not activated";
                }
            } else {
                obj.error = 1;
                obj.msg = "Email not verified";
            }

            if (obj.error == 1) {
                return res.status(201)
                        .json({
                            status: 201,
                            message: obj.msg,
                            error: 1
                        });
            } else {
                return res.status(200)
                        .json({
                            status: 200,
                            message: obj.msg,
                            error: 0
                        });
            }
        } else {
// All ok. Move forward.
            next();
        }
    }
    );
};
exports.userSignout = async function (req, res, next) {
    if (req.session.userLogin) {
        console.log("session before",req.session.userLogin);
        req.session.destroy();
        //res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        console.log("session after",req.session);
        res.redirect("/users/login");
    } else {
        console.log("hahcbakhbc")
        next();
    }
};
exports.authenticate = async function (req, res, next) {
   // console.log("REQ.SESSION.userlogin at authenticate middleware",req.session.userLogin);
   console.log("session",req.session.userLogin)
    if (req.session.userLogin) {
        req.authenticationId = req.session.userLogin;
        next();
    } else {
        res.redirect("/users/login");
    }
};

exports.isLogin = async function (req, res, next) {
    if (req.session.userLogin) {
        res.redirect("/users/dashboard");
    } else {
        next();
    }
}; 

