var moment = require('moment');
const User = require('../models/Member');
const Admin = require('../models/Admin');
const constants = require('../modules/constants');
var mailer = require('../modules/mailer');
const truffle_connect = require('../connection/app.js');
var frontConstant = require('../modules/front_constant');
var handlebarhelpers = require('../modules/handlebarhelpers');
var waterfall = require('async-waterfall');
var countries = require('country-list')();
var arraySort = require('array-sort');
var jwt = require('jsonwebtoken');
const commonService = require('../services/common.service');
 var QRCode = require('qrcode');
 const bcrypt = require('bcryptjs');
const Web3 = require('web3');
const clickcoin_artifact = require('../build/contracts/VegaCoinCrowdsale.json');
const adminService = require('../services/admin.service');

console.log("aaaaa",adminService);
exports.userSignout = async function (req, res, next) {
    if (req.session.userLogin) {
        console.log("session before",req.session.adminLogin);
        req.session.destroy();
       // console.log("session after",req.session.userLogin);
        res.redirect("/users/login");
    } else {
        next();
    };
};    
exports.adminLogin = async function (req, res, next) {

    // Get posted request data for the user sign in.
    var renderParams = {
        layout: 'adminLogin',
        title: 'Admin Login',
        constants: constants,
      //  user: req.session.userLogin,
       handlebarhelpers: handlebarhelpers,
        //country: countries.getData()
    };
    res.render('adminLogin',renderParams);
};    

exports.adminIndex = async function (req, res, next) {

    // Get posted request data for the user sign in.
    var renderParams = {
        layout: 'adminIndex',
        title: 'Admin Index',
        constants: constants,
       // user: req.session.userLogin,
       handlebarhelpers: handlebarhelpers
        //country: countries.getData()
    };
    res.render('adminIndex',renderParams);
};    

exports.adminTransactions = async function (req, res, next) {
    
    console.log("admin service",commonService);
        console.log("admin service",adminService);
        adminService.getStatementss(req, function (error, statement) {
                var renderParams = {
                    layout: 'adminTransactions',
                    title: 'transactions',
                    constants: constants,
                    user: req.session.userLogin,
                handlebarhelpers: handlebarhelpers
                };
      
            len = statement.length;
            renderParams.trans = {
                t1 : statement,
                len:len       
            }
           // console.log("transactions len", trans.t1.len);
            console.log("Admin params",renderParams);
            res.render('adminTransactions',renderParams);
        });
}; 


exports.adminLoginn = function (req, res, next) {
    console.log("eeee",req.body);
    
    
        var user = {
            email: req.body.email,
            password: req.body.password
        };
    
        var userFound = {};
        console.log("usersss", user);
    
        Admin.findOne({"email": user.email}, function (err, foundUser) {
            (foundUser) ? (userFound = foundUser.toObject()) : userFound = {};
            console.log("foundUser", foundUser);
            
            
            if (err) {
               commonService.sendResponse(res, 500, 500, "Some error occured, Try Again " + error, error);
    
            } else if (!foundUser) {

                commonService.sendResponse(res, 401, 401, "User Not Found" );
                
            } else if (foundUser && userFound.password != user.password ) {
                
                 commonService.sendResponse(res, 401, 401, "Wrong Password" );
    
            } 
            else {
        
                delete userFound.password;
                req.session.adminLogin = userFound;
                console.log('', req.session.adminLogin);
            
                commonService.sendResponse(res, 200, 200, "login successful",userFound );
            }
        })
    };
            

exports.adminIndexx = function (req, res, next) {
        console.log("eeee",req.body);
        
            var tok = req.body.tokens;
            var user = {
                address: req.body.address,
                tokens: req.body.tokens//tok*constants.DECIMALS  
            };

            console.log("usersss", user);


            
            var web3 = new Web3(constants.INFURA_ENDPOINT + constants.INFURA_KEY);


            if(web3.utils.isAddress(req.body.address) == false ) {
                // return res.status(201)
                //         .json({
                //             status: 201,
                //             data: "",
                //             message: "Please enter a Valid Ethereum Address",
                //             error: 1
                //         });
             commonService.sendResponse(res, 405, 405, 'Please enter a Valid Ethereum Address');

            }

            else{
                    var contractInstance = new web3.eth.Contract(clickcoin_artifact.abi, constants.CONTRACT_ADDRESS);

                    
                    truffle_connect.bountyTokens(user.address,user.tokens,function (error, objAirdrop) {

                        if (!error) {
                            console.log("Success");
                            commonService.sendResponse(res, 200, 200, 'Bounty Tokens Sent');
                        } else if (error){
                            console.log("Failed");
                            console.log("fff",error);
                            commonService.sendResponse(res, 405, 405, "Something Went Wrong. Please Try Again",error);
                        }
                        else {
                            commonService.sendResponse(res, 500, 500, 'Some error occured.', error);
                        }
                    
                    });
            }        
};
    