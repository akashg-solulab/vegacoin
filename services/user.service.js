// Get user model.
/*
exports.getTokenBalance = function (req, res, next) {

    commonService.getTokenBal(function (error, objBalance) {

        if (!error) {
            console.log("objBalance", objBalance);
            commonService.sendResponse(res, 200, 200, 'Token Balance', objBalance);
        } else {
            commonService.sendResponse(res, 500, 500, 'Some error occured: ' + error, error);

        }
    });
};*/
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

exports.notifyUser = function (user, callback) {

            var templateVariable = {
                templateURL: "mailtemplate/email",
                fullname: user.firstname + " " + user.lastname,
                token: user.email_verification_token,
                constants: constants
            };
            console.log("TemplateVariable : ",templateVariable );
            var mailParamsObject = {
                templateVariable: templateVariable,
                to: user.email,
                subject: "Verify Email for Vega Coin ICO"
            };

            mailer.sendMail(mailParamsObject, function (error, info) {
                if (error) {
                    callback(error);
                    console.log(error);
                } else {
                    console.log(info);
                    console.log("Success");
                    //??
                }
            });
       
  
};


exports.getTokenBal = function (req,callback) {

        truffle_connect.getCKCBalance(req,function (error, tokenBal) {
        if (!error) {
            var tokenBalance = tokenBal / config.DECIMALS;
            console.log("tokenBal", tokenBalance);
        // callback(null, {totalTokens: 600000000, totalTokensSold: 400000000, totalTokensInHand: 200000000});
            callback(null, {tokenBalance});
        }
        else {
             console.log("error", error);
             callback(error, error);
        }
    
        });

};
  
exports.getDashDet = function (req,callback) {

    truffle_connect.getDashDet(req,function (error, sCap,hCap,ICOSupply,currentAAAPerEther,StartDate,EndDate,balance,roundNumber,roundCondition,rounds) {
    if (!error) {
        console.log("bbb",balance);
        callback(null, sCap,hCap,ICOSupply,currentAAAPerEther,StartDate,EndDate,balance,roundNumber,roundCondition,rounds);
        //console.log("services",hCap);
    }
    else {
         console.log("error", error);
         callback(error, error);
    }

    });

};

async function genRandomString(length,callback) {
    
    var text = "";
    var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < length; i++) {
        text += await characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    callback(Date.now() + text);
}
async function genRandomStringg(length) {
    
    var text = "";
    var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < length; i++) {
        text += await characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    return (Date.now() + text);
}

async function genPassHash(plainTextPassword) {
    const saltRounds = 10;
    const passHash = await bcrypt.hash(plainTextPassword, saltRounds);
    return passHash;
};

exports.signup = async function (userdata) {
    var newUser = new user({
        firstname: userdata.firstname,
        lastname: userdata.lastname,
        dob:userdata.dob,
        phone:userdata.phone,
        country:userdata.country,
        publicWalletAddress: userdata.publicWalletAddress,
        company:userdata.company,
        email: userdata.email.toLowerCase(),
        emailVerified: false,
        email_verification_token:await genRandomStringg(15),
        phone: userdata.phone,
        password: await genPassHash(userdata.password),
        emailVerified: false,
        countryCode:userdata.countryCode
    });
    try {
        // Save user.
        var saveduser = await newUser.save();
        return saveduser;
    } catch (exception) {
       // console.log("services 93",exception);
        // return an error message describing the reason.
        throw Error("Error while creating user");
    }
};
exports.editUser = async function (req, userdata) {
    var editUser11 = {
        firstname: userdata.firstname,
         lastname: userdata.lastname,
        // phone: userdata.phone,
         dob: userdata.dob,
         country: userdata.country,
        // usname: userdata.username,
         publicWalletAddress:userdata.publicWalletAddress,
        // countryCode: userdata.countryCode,
         company: userdata.company
        // username: userdata.username,
      //  profilePicture: userdata.profilePicture
    };
    //cleaner(editUser);
    console.log("userdata",editUser11);
   //console.log("id", req.authenticationId.userId);
    try {
        var updateduser = await user.update({
            _id: req.authenticationId._id
        }, editUser11);
        if (updateduser.n == 1) {
            var userData = user.findOne({_id:req.authenticationId._id});
            return userData;
        }
    } catch (exception) {
        console.log("rrrrr",exception);
        // return an error message describing the reason.
        throw Error("Error while updating user");
    }
};
// Generates a password hash.
async function genPassHash(plainTextPassword) {
    const saltRounds = 10;
    const passHash = await bcrypt.hash(plainTextPassword, saltRounds);
    return passHash;
}; 

exports.checkTokenn = async function (token) {


    try {
        // check user.
        var checkToken = await user.findOne({'email_verification_token': token}, '_id emailVerified');
        return checkToken;
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while checking token");
    }
};
exports.checkToken = async function (token) {

    try {
        // check user.
        var checkToken = await user.findOne({'verificationToken': token}, '_id emailVerified');
        return checkToken;
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while checking token");
    }
};
exports.updateUserToken = async function (id) {

    try {
        var checkToken = await user.update({_id: id}, {$set: {emailVerified: true, verificationToken: null}});
        return checkToken;
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while updating email");
    }
};
exports.forgotpwd = function (email, callback) {
    try {
        // check user.
        user.findOne({'email': email}, function (err, checkEmail) {
            console.log("userfound",checkEmail);
            if (!err) {
                console.log('1');
                callback(null, checkEmail);
            } else {
                console.log('2');
                callback(null, {});
            }
        });
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while checking email");
    }
};
exports.updateNewToken = function (id, callback) {
    console.log("Heyyyyyy");
    try {

          genRandomString(5, function (newToken) {
            console.log("tokennnn",newToken);
            var obj = {};
            user.update({_id: id}, {$set: {verificationToken: newToken}}, function (error, updateToken) {
                if (updateToken) {
                    // console.log();
                    obj.token = newToken;
                    obj.response = updateToken.n;
                    callback(null, obj);
                } else {
                    callback(null, obj);
                }
            });
        });
    } catch (exception) {
        console.log("Exception",exception);
        // return an error message describing the reason.
        throw Error("Error while updating email");
    }
};
exports.userData = function (id, callback) {
    try {
        user.findOne({'_id': id}, 'id firstname lastname email emailVerified', function (error, userData) {

            callback(null, userData);
        });
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error");
    }
};
exports.updatePassword = async function (token, password) {
    console.log("Hello");
    try {

        var newpassword = await genPassHash(password);
        //, passwordConfirm: password
     var updatePassword = await user.update({verificationToken: token}, {$set: {password: newpassword}});
        var updateToken = await user.update({verificationToken: token}, {$set: {verificationToken: null}});
        console.log("Hello",updateToken);
        return updateToken;
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while updating email");
    }
};
exports.updateEmailVerify = async function (token) {

    try {
        //var updatePassword = await user.update({email_verification_token: token}, {$set: {emailVerified: true}});
        var updateToken = await user.update({email_verification_token: token}, {$set: {emailVerified: true}});
        return updateToken;
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while updating email");
    }
};
exports.signin = async function (userdetails) {
    try {
        // check user.
        var checkedUser = await user.findOne({'email': userdetails.email});
        return checkedUser;
    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while creating user");
    }
};
exports.chkSignIn = async function (result, password) {

    try {

        var obj = {};
        if (result != null) {
            if (result.emailVerified != false) {
                if (result.isActive != false) {
                    /* compare the password */
                    if (bcrypt.compareSync(password, result.password) === true) {
                        obj.error = 0;
                        obj.id = result.id;
                        obj.email = result.email;
                        obj.name = result.name;
                        obj.emailVerified = result.emailVerified;
                        obj.isActive = result.isActive;
                        return obj;
                    } else {
                        obj.error = 1;
                        obj.msg = "Invalid Password";
                        return obj;
                    }
                } else {
                    obj.error = 1;
                    obj.msg = "User in not activated";
                    return obj;
                }
            } else {
                obj.error = 1;
                obj.msg = "Email not verified";
                return obj;
            }
        } else {
            obj.error = 1;
            obj.msg = "User doesn't exist";
            return obj;
        }

    } catch (exception) {
        // return an error message describing the reason.
        throw Error("Error while creating user");
    }
};

exports.logOut = function(req,callback) {
    accessToken.deleteOne({_id: req.query.access_token}, function (error) {
        if  (error) {
            callback(error,error);
        }
        else {
            callback(null,"user logged out")
        }
    });
}

exports.getStatements = function (req, callback) {

    user.findOne({_id:req.authenticationId._id}, function (error1,Memberfound) {
        if (Memberfound) {
            console.log("abcd",Memberfound.publicWalletAddress);
            var statements = {};

                getEtherStatement(Memberfound.publicWalletAddress, function (error, statement) {
                    // console.log("ssss", statement);
                    console.log("len", statement.length)
                    if (statement.length > 0) {
                        console.log("Hwello")
                        parseStatementData(statement, Memberfound.publicWalletAddress, function (error, statem) {
                        transactions = [];
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

exports.getStatementss = function (req, callback) {
//"5b9b4d8d137fa92011bb33c9"
    user.findOne({_id:req.authenticationId._id}, function (error1,Memberfound) {

        if (Memberfound) {
            Memberfound = Memberfound.toObject();
           // console.log("abcd",Memberfound);
            console.log("abcd",Memberfound.publicWalletAddress);
            var statements = {};
                getNewEtherStatement(Memberfound.publicWalletAddress, function (error, statement) {
                    //console.log("ssss", statement);//Memberfound.publicWalletAddress
                    console.log("len", statement.length)
                    if (statement.length > 0) {
                        console.log("Hwello")
                        parseStatementDataa(statement,Memberfound.publicWalletAddress, function (error, statem) {
                        transactions = [];
                             // console.log("333", statem);
                            if (statem.length > 0) {
                                transactions = arraySort(statem, 'Date', {reverse: true});
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
    console.log("memberfound address in getNewEtherStatement()", address);
    axios.get(constants.ETHERSCAN_USER_BOUNTY+constants.CONTRACT_ADDRESS+'&address='+address+'&sort=asc&apikey='+constants.ETHERSCAN_API_KEY)
            .then(function (response) {
                //delete response.data.input;
               console.log("getNewEtherStatement  response.data.result", response.data.result);
                callback(null, response.data.result);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                callback(error, error);
//                                console.log(error);
            });
}
function parseStatementDataa(data, address, callback) {
    var details = [];

   //console.log("dataaa",data);  //moment.unix(val.timeStamp).format("MM/DD/YYYY");
   _.forEach(data, function (val, key) {
    //var data = {};
    //&& val.to == "0xdc92e23294bdf502e634f5df6522231b07182c9d"
    console.log("valvalvalval",val.from);
    console.log("constants.BOUNTY_ADDRESS",constants.BOUNTY_ADDRESS)

    var data = {};

    if (val.from == constants.BOUNTY_ADDRESS.toLowerCase() ) {
       
        data.TxHash = val.hash;
        data.Date = moment.unix(val.timeStamp).utc().format("DD/MM/YY");
        data.from = val.from;
        data.value = (val.value / constants.DECIMALS);
        console.log("Details1",details);
        details.push(data);
        console.log("Details2",details);
        
    }
});
console.log("2222");
callback(null, details);
console.log("parsestatementdataa",details)
}


//exports.getStatements = getStatements;
function getEtherStatement(address, callback) {
  //  console.log("ethstatement", address);
    axios.get(constants.ETHERSCAN_URL + '/api?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&apikey=' + constants.ETHERSCAN_API_KEY)
            .then(function (response) {
                //delete response.data.input;
              // console.log("ethstatement", response.data.result);
                callback(null, response.data.result);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                callback(error, error);
//                                console.log(error);
            });
}
function getStatus(hash) {
    //console.log("bounty address in getNewEtherStatement()", address);
    axios.get('https://api-ropsten.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash='+hash+'&apikey='+constants.ETHERSCAN_API_KEY)
            .then(function (response) {
                //delete response.data.input;
               console.log("getNewEtherStatement", response.data.result);
                return response.data.result;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return error;
//                                console.log(error);
            });
}

exports.getStatus = getStatus;
/*
    axios.get(constants.ETHERSCAN_URL + '/api?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&apikey=' + constants.ETHERSCAN_API_KEY)
            .then(function (response) {
                console.log("re", response.data.result);
                callback(null, response.data.result);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                callback(error, error);
//                                console.log(error);
            });
}*/

function parseStatementData(data, address, callback) {
    var details = [];
    _.forEach(data, function (val, key) {
        var data = {};
        //&& val.to == "0xdc92e23294bdf502e634f5df6522231b07182c9d"
        if (val.value > 0 && val.to == constants.CONTRACT_ADDRESS ) {
           
            data.TxHash = val.hash;
            data.Block = val.blockNumber;
            data.Age = moment.unix(val.timeStamp).utc().format("DD/MM/YY");
            data.from = val.from;
            data.to = val.to;
            data.value = (val.value / constants.DECIMALS) ;
            data.gas = (val.gasUsed/1000000000);
            details.push(data);
        }
    });
    console.log("2222");
    callback(null, details);
}

