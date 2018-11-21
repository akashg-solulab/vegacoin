const User = require('../models/Member');

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


exports.authenticate = async function (req, res, next) {
    // console.log("REQ.SESSION.userlogin at authenticate middleware",req.session.userLogin);
     if (req.session.adminLogin) {
         req.authenticationId = req.session.adminLogin;
         next();
     } else {
         res.redirect("/admin/login");
     }
 };

 exports.userSignout = async function (req, res, next) {
    if (req.session.adminLogin) {
        console.log("session before",req.session.adminLogin);
        req.session.destroy();
       // console.log("session after",req.session.userLogin);
        res.redirect("/admin/login");
    } else {
        console.log("hahcbakhbc")
        next();
    }
};

exports.isLogin = async function (req, res, next) {
    if (req.session.adminLogin) {
        res.redirect("/admin/bounty-transfer");
    } else {
        next();
    }
}; 