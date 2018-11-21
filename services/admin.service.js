
var user = require('../models/Member');
var Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
var cleaner = require('deep-cleaner');
var common = require('./common.service');
var jwt = require('jsonwebtoken');
var config = require('../modules/constants');
var moment = require('moment');
var _ = require('lodash');
var async = require('async');
var waterfall = require('async-waterfall');
var forEach = require('async-foreach').forEach;
var ObjectId = mongoose.Schema.Types.ObjectId;
const truffle_connect = require('../connection/app.js');
const axios = require('axios');
const constants = require('../modules/constants');
var arraySort = require('array-sort');
var notify = require('../modules/notification');
var mailer = require('../modules/mailer');

exports.getStatementss = function (req, callback) {

    Admin.findOne({_id:req.authenticationId._id}, function (error1,Memberfound) {

        if (Memberfound) {
            Memberfound = Memberfound.toObject();
            console.log("abcd",Memberfound);
            console.log("abcd",Memberfound.publicWalletAddress);
            var statements = {};
                getNewEtherStatement(constants.BOUNTY_ADDRESS, function (error, statement) {
                    //console.log("ssss", statement);//Memberfound.publicWalletAddress
                    console.log("len", statement.length)
                    if (statement.length > 0) {
                        console.log("Hwello")
                       // console.log("Statement",statement);
                        parseStatementDataa(statement, constants.BOUNTY_ADDRESS, function (error, statem) {
                        transactions = [];
                        console.log("heyy buddy");
                            //  console.log("333", statem);
                            if (statem.length > 0) {
                                transactions = arraySort(statem, 'Block', {reverse: true});
                                callback(null, transactions);
                            } else {
                                console.log("Came here 2222");  
                                callback(null, transactions);
                            }
                        });
                    } else if (error) {
                        callback(error, error);
                    } else {
                        console.log("Hwello fff")
                        transactions = [];
                        callback(null, transactions)
                    }
                });
        
        } else {
            callback(error1, {});
        }
    });
};

function getNewEtherStatement(address, callback) {
    console.log("bounty address in getNewEtherStatement()", address);
    axios.get(constants.ETHERSCAN_API_URL+constants.BOUNTY_ADDRESS+'&startblock=0&endblock=999999999&sort=asc&apikey='+constants.ETHERSCAN_API_KEY)
            .then(function (response) {
                //delete response.data.input;
               //console.log("getNewEtherStatement", response.data.result);
                callback(null, response.data.result);
            })
            .catch(function (error) {
                // handle error

                console.log(error.response);

                callback(error, error);

//                                console.log(error);
            });

        // if(error){
        //     return axios.request(config);
        // }
        // else{
        //     callback(null, response.data.result);
        // }
}
function parseStatementDataa(data, address, callback) {

    console.log("inside parse statement dataa")
    var details = [];
   // console.log("dataaa",data);
   //.log("data",data);
    async.forEach(data, function (val, callbackS) {
        var data = {};
        var junk = {};
        //&& val.to == "0xdc92e23294bdf502e634f5df6522231b07182c9d,,,&& val.to == constants.CONTRACT_ADDRESS"
        // if (val.value < 1000000000000000000000000 || val.value < 100000000000000000) {
        //     junk.TxHash = val.hash
        //     callbackS();
        // }     
        // else{
           // while (val.value <1000000000000000000000000){
               if (val.from == constants.BOUNTY_ADDRESS.toLowerCase()) {
                data.TxHash = val.hash;
                data.Date =  moment.unix(val.timeStamp).utc().format("DD/MM/YY");
                data.tokens = val.value/1000000000000000000;
                data.Block = val.blockNumber;
                data.to = val.to;
               
                details.push(data);
                console.log("coming here");
               
               }
               callbackS();
               
           // }
            
        // }  
     
    }, function (err) {
    console.log("2222");
    console.log("details",details);
    callback(null, details);
    });
    
}

console.log("adminService",exports);
