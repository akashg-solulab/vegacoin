// Access user service.
const userService = require('../services/user.service');
var moment = require('moment');
const User = require('../models/Member');
const Admin = require('../models/Admin');
const constants = require('../modules/constants');
var mailer = require('../modules/mailer');
const truffle_connect = require('../connection/app.js');
var frontConstant = require('../modules/front_constant');
var handlebarhelpers = require('../modules/handlebarhelpers');
var waterfall = require('async-waterfall');
//var countries = require('country-list')();
var arraySort = require('array-sort');
var jwt = require('jsonwebtoken');
const commonService = require('../services/common.service');
 var QRCode = require('qrcode');
 const bcrypt = require('bcryptjs');
const Web3 = require('web3');
const clickcoin_artifact = require('../build/contracts/VegaCoinCrowdsale.json');
const countries = require('country-data');
const countryList = require('country-list')();
// QRCode.toDataURL(constants.CONTRACT_ADDRESS, function (err, url) {
//     console.log(url)
//   })

//console.log("Countrylist",countryList.getNames());
exports.signup = async function (req, res, next) {
    // console.log("controller",req.body.password );
    // console.log("controller",req.body.c_password );
    var web3 = new Web3(constants.INFURA_ENDPOINT + constants.INFURA_KEY);
console.log("cont",req.body);
console.log("ddd",web3.utils.isAddress(req.body.publicWalletAddress))
   
        if(web3.utils.isAddress(req.body.publicWalletAddress) == false ) {
        return res.status(201)
                .json({
                    status: 201,
                    data: "",
                    message: "Please enter a valid ethereum address",
                    error: 1
                });

    }

    try {   
        
        // Create a new user account using user service object.
        console.log("country code",req.body);
        var createdUser = await userService.signup(req.body);
        if (createdUser != null) {
            
            userService.notifyUser(createdUser, function (d) {
                console.log(d);
            });
        }

    return res.status(201)
                        .json({
                            status: 200,
                           // data: createdUser,
                          //  privatekey: user_wallet.privateKey,
                            message: "Sign up successfull, please verify your email before logging in",
                            error: 0
                        });
    } catch (exception) {
        console.log(exception);
        // Return an error response with code and message.
        return res.status(500)
                .json({
                    status: 500,
                    message: "User sign up failed, something went wrong",
                    error: 1
                });
    }
};

exports.login = function (req, res, next) {
    console.log("eeee",req.body);
    
    
        var user = {
            //.toLowerCase()
            email: req.body.email,
            password: req.body.password
        };
    
        var userFound = {};
        console.log("usersss", user);
    
        User.findOne({"email": user.email}, function (err, foundUser) {
            (foundUser) ? (userFound = foundUser.toObject()) : userFound = {};
            console.log("foundUser", foundUser);
            
            
            if (err) {
               commonService.sendResponse(res, 500, 500, "Some error occured, try again " + error, error);
    
            } else if (!foundUser) {

                commonService.sendResponse(res, 401, 401, "User not found" );
                
            } else if (foundUser && (bcrypt.compareSync( user.password, foundUser.password) == false) ) {
                
                 commonService.sendResponse(res, 401, 401, "Wrong password" );
    
            } else if (foundUser && foundUser.emailVerified != true) {

                commonService.sendResponse(res, 400, 400, "Please verify your email first", {});
            }  else {
        
                delete userFound.password;
               delete userFound.emailVerified;
                delete userFound.accessToken;

                req.session.userLogin = userFound;
                console.log('USERLOGIN', req.session.userLogin);
               

                commonService.sendResponse(res, 200, 200, "Login successful",userFound );
            }
        })
    };


    exports.getProfile = async function (req, res, next) {
        var renderParams = {
            layout: 'setting',
            title: 'setting',
            constants: constants,
            user: req.session.userLogin,
            handlebarhelpers: handlebarhelpers,
            //country: countries.getData()
        };
        // user.findOne({_id: req.session.userLogin._id}, function (error, userdetails) {
        //     console.log(userdetails)
        //     if (!error) {
        //         renderParams.userdetails = userdetails;
        //     }
        //     res.render('profile', renderParams);
        // });
    
    
        
            // {"email": user.email}, function (err, foundUser)
            // console.log("User 728",User);
           var userProfile = await User.findOne({_id:req.authenticationId._id});
    
            if (userProfile) {
                var userFound1 = userProfile.toObject();
                // delete userFound1.password;
                // //delete userFound1.password;
                //         delete userFound1.emailVerified;
                //         delete userFound1.accessToken;
                //         delete userFound1.createdAt;
                //         delete userFound1.updatedAt;
                
               // user = userFound1;
                // var fullname = userFound1.firstname+" "+userFound1.lastname;
                renderParams.profile = {
                    firstname : userFound1.firstname,
                    lastname: userFound1.lastname,
                    email : userFound1.email,
                    dob : userFound1.dob,
                    country : userFound1.country,
                    countryCode: userFound1.countryCode,
                    publicWalletAddress:userFound1.publicWalletAddress,
                    company : userFound1.company,
                    phone:userFound1.phone
                }
                renderParams.objvar = {fullname : userFound1.firstname};
                 res.render('setting', renderParams);
            }  
             
        //     }   
        // //         commonService.sendResponse(res, 200, 200, 'Profile Details', user);
        // //     } else {
        // //         commonService.sendResponse(res, 401, 401, 'User not Found');
        // //     }
        // // } catch (exception) {
        // //     // Return an error response with code and message.
        // //     commonService.sendResponse(res, 500, 500, 'Something Went Wrong. Please try again.');
        // // }
    
    };
    

    exports.editProfile = async function (req, res, next) {
       // console.log(req.file);
        // if (req.file) {
        //     var userData = await User.findOne({_id: "5b83c159bef3bd2286ef4dbe"}, function (err, userDetails) {
        //         if (userDetails ) {
        //             fs.unlinkSync(req.file.destination);
        //         }
        //     });
        // }
   // console.log("countries",countries.countries.all);

   // var lookup = countries.lookup;
 
   // // Match a value (grab first from array)
    //var france = lookup.countries({name: 'France'})[0];



        

       // console.log("france",countries);
       // if (req.body.country )
        var user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
           // email:req.body.email,
            dob:req.body.dob,
            //country: req.body.country,
            publicWalletAddress : req.body.publicWalletAddress,
            company: req.body.company


            };

            var web3 = new Web3(constants.INFURA_ENDPOINT + constants.INFURA_KEY);

            if(web3.utils.isAddress(req.body.publicWalletAddress) == false ) {
                return res.status(201)
                        .json({
                            status: 201,
                            data: "",
                            message: "Please enter a valid ethereum address",
                            error: 1
                        });
        
            }


        try {
            var userUpdateProfile = await userService.editUser(req, user);
            console.log("Profileeeee",userUpdateProfile);
            if (userUpdateProfile) {
                var userFound2 = userUpdateProfile.toObject();
                delete userFound2.password;
                user1 = userFound2;
               
                commonService.sendResponse(res, 200, 200, 'Profile updated successfully', user1);
            } else {
                commonService.sendResponse(res, 401, 401, 'Profile not updated, please try again');
            }
        } catch (exception) {
            console.log("exception",exception);
            // Return an error response with code and message.
            commonService.sendResponse(res, 500, 500, 'Profile not updated, something went wrong');
        }
    };
    

exports.getStatements = async function (req, res, next) {

    userService.getStatements(req, function (error, statement) {


        var renderParams = {
            layout: 'transactions',
            title: 'transactions',
            constants: constants,
            user: req.session.userLogin,
           handlebarhelpers: handlebarhelpers,
            //country: countries.getData()
        };
console.log("Controllerr",statement);
        //console.log("statement",statement);



        User.findOne({_id:req.authenticationId._id}, function(err,userProfile){
            if (userProfile) {
                var userFound1 = userProfile.toObject();
                
                renderParams.objvar = {
                    fullname : userFound1.firstname

                }
                console.log("transaction fullname",renderParams.objvar.fullname);

            }

            len = statement.length;
                renderParams.trans = {
                    t1 : statement,
                    len:len       
                }
            res.render('transactions',renderParams);
        
        });
    
       

    
    //renderParams.objvar.fullname = userFound1.firstname;
   // console.log("transaction params",renderParams.trans.t1[0]);
    

});
};
//     userService.getStatements(req, function (error, statement) {
// //console.log("Controllerr",statement);
//         if (!error) {
            
//             commonService.sendResponse(res, 200, 200, 'List of Statements', {transactions: transactions});
//         } else {
//             commonService.sendResponse(res, 401, 401, 'Soemthing went Wrong', error);
//         }
//     });



    exports.getDashDetails = function (req, res, next) {
        var renderParams = {
            layout: 'dashboard',
            title: 'Dashboard',
            user: req.session.userLogin,

            constants: constants,
           handlebarhelpers: handlebarhelpers,
        };


        
         userService.getDashDet(req,function (error, SoftCap,HardCap,ICOSupply,RatePerEther,StartDate,EndDate,balance,roundNumber,roundCondition,rounds) {
           
            if (!error) {

           //console.log("rounds in renderparams",rounds);
        
            var arr = new Array( rounds[0].roundBonus, rounds[1].roundBonus, rounds[2].roundBonus, rounds[3].roundBonus, rounds[4].roundBonus, rounds[5].roundBonus );
          //  console.log("Array above renderparams", arr);

            arr.sort(function(a, b){return b-a});

          //  console.log("Sorted array",arr);
            var r1bonus = arr[0];
            var r2bonus = arr[1];
            var r3bonus = arr[2];
            var r4bonus = arr[3];
            var r5bonus = arr[4];
            var r6bonus = arr[5];


            var now = moment().utc().format("YYYY-MM-DDTHH:mm");
            
            var startdate = moment.unix(StartDate).utc().format("LLLL");
            var enddate =  moment.unix(EndDate).utc().format("LLLL");
           // var enddate = moment.unix(EndDate);



           // var diff = moment.duration(startdate.diff(now));  
          //  var enddate = moment.duration(enddate.diff(now));   
            console.log("startdate",startdate);
            console.log("enddate",enddate); 
            console.log("now",now);   

            console.log("moment of startdate", moment(startdate, "LLLL") );   
            console.log("moment of enddate", moment(enddate, "LLLL") );   
            console.log("moment of now", moment(now, "LLLL") );   

            var sd = moment.unix(StartDate);
            var ed = moment.unix(EndDate);
            var current = moment();
            
            console.log("isBetween", moment(now, "YYYY-MM-DDTHH:mm").isBetween(moment(startdate, "YYYY-MM-DDTHH:mm"), moment(startdate, "YYYY-MM-DDTHH:mm")))
            console.log("isBetween", moment(current).isBetween(moment(sd), moment(ed)))
           
            if( moment(current).isBetween(moment(sd), moment(ed)) == true){
                
                
                var duration = moment.duration(ed.diff(current));
                var days = duration.asDays();
                var hours = duration.asHours();
                var minutes = duration.asMinutes();
                
                console.log("hours",hours)
                //console.log("inBetween == true", duration);


               if(roundNumber == 6 && roundCondition == false) {
                   var msg = "ICO has Ended";
                   console.log("msg",msg)
               }
               else {

                    if (days >= 1) {
                        var msg = "ICO Ends in "+ days.toFixed(0)+ " days"; 
                        console.log("msg",msg)
                    }
                    if (days < 1 && hours >= 1) {
                        var msg = "ICO Ends in "+ hours.toFixed(0)+ " hours " + (minutes.toFixed(0)%60) + " minutes"; 
                        console.log("msg",msg)
                    }
                    if (days < 1 && hours < 1 && minutes >=1) {
                        var msg = "ICO Ends in "+ minutes.toFixed(0)+ " minutes"; 
                        console.log("msg",msg)
                    }
                    if (days < 1 && hours < 1 && minutes < 1){
                        var msg = "ICO Ends in less than 1 minute"; 
                        console.log("msg",msg)
                    }
                   
               } 

            }

            else {
                
                
               // console.log("inBetween == false", duration )
                
                if(current < sd){
                    var duration1 = moment.duration(sd.diff(current));
                    var days1 = duration1.asDays();
                    var hours1 = duration1.asHours();
                    var minutes1 = duration1.asMinutes();
                    // if (minutes1 < 1){
                    //     var msg = "ICO Starts in less than 1 minute"; 
                    //     console.log("msg",msg)
                    // }
                    // else {
                    //     var msg = "ICO Starts in  "+ days1.toFixed(0)+ " days " + (hours1.toFixed(0) % 24) + " hours " + (minutes1.toFixed(0)%60)+ " minutes"; 
                    //     console.log("msg",msg)
                    // }

                    if (days1 >= 1) {
                        var msg = "ICO Starts in "+ days1.toFixed(0)+ " days"; 
                        console.log("msg",msg)
                    }
                    if (days1 < 1 && hours1 >= 1) {
                        var msg = "ICO Starts in "+ hours1.toFixed(0)+ " hours " + (minutes1.toFixed(0)%60) + " minutes"; 
                        console.log("msg",msg)
                    }
                    if (days1 < 1 && hours1 < 1 && minutes1 >=1) {
                        var msg = "ICO Starts in "+ minutes1.toFixed(0)+ " minutes"; 
                        console.log("msg",msg)
                    }
                    if (minutes1 < 1){
                        var msg = "ICO Starts in less than 1 minute"; 
                        console.log("msg",msg)
                    }
                    

                }

                else {
                    var msg = "ICO Has Ended ";
                    console.log("msg",msg)

                }


            }

            // var sdhours = startdate.asHours();
            // var edhours = enddate.asHours();  
            // console.log("sdhours",sdhours);
            // console.log("edhours",edhours);

                
            ///
        //     console.log("momenttttt", now);
        //     var then = moment.unix(EndDate);
        //     console.log("then", then);
           
        //     var duration = moment.duration(then.diff(now));
        //    // console.log("difference", duration);
        //     var days = duration.asDays();
        //     days = days.toString().split(".")[0];
        //    // console.log("days", days);
        //    // days = -1;
        //     console.log("days", days);

        //     var st = moment.unix(StartDate);
        //     console.log("ststststs",st);
        //     console.log("nownownow",now);

        //     var duratio = moment.duration(st.diff(now));
        //     //console.log("duratioduratio",duratio);
        //     var dayy = duratio.asDays();
        //     console.log("dayssssss",dayy);
        //     dayy = dayy.toString().split(".")[0];
            
                
            //     dayy === starts in;
            //     days === ends in;

            // if (dayy >= 1 || dayy <=-1 ) && ((days >= 1 || days <= -1)) {
            //     dayy = dayy.toString().split(".")[0];
            //     days = days.toString().split(".")[0];
            // }    
            // else if((dayy >= 1 || dayy <=-1) && ((days < 1 || days > -1) ) { 
            //     dayy = dayy.toString().split(".")[0];

            // }

            // else if((dayy < 1 || days >-1) && ((dayy >= 1 || dayy <= -1)){
            //     days = days.toString().split(".")[0];

            // }

            // else{

            // }





           // console.log("dayssssss",dayy);

           // console.log("getting firstname,lastname,getdashdet",);            


            User.findOne({_id:req.authenticationId._id}, function(err,userProfile){

              //  console.log("USERPROFILEEEEE",userProfile)
                if (userProfile) {
                    var userFound1 = userProfile.toObject();   
                }   

                


    var daysss = 20;
    var dayyy = 40;

              //  console.log("getting firstname,lastname,getdashdet",userFound1);            
               // var endsin = 80;
                //var startsin = 20; 
                QRCode.toDataURL(constants.CONTRACT_ADDRESS, function (err, url) {
                   // console.log("uuuuuuuuuurrrrrrrrrrrrrrrrrlllllllllll",url);
                    renderParams.url = url;
                    renderParams.objvar = {
                        SoftCap:SoftCap,
                        HardCap:HardCap,
                        ICOSupply:ICOSupply,
                        RatePerEther:RatePerEther,
                        StartDate:StartDate,
                        EndDate:EndDate,
                        balance:Math.round((balance/ constants.DECIMALS)) ,
                        roundNumber:roundNumber,
                        roundCondition:roundCondition,
                        r1bonus:r1bonus,
                        r2bonus:r2bonus,
                        r3bonus:r3bonus,
                        r4bonus:r4bonus,
                        r5bonus:r5bonus,
                        r6bonus:r6bonus,
                        endsin:5,
                        startsin:-3,
                        fullname:userFound1.firstname,
                        msg:msg
                        
                    };
                    console.log("msgmsgmsgmsg",renderParams.objvar.msg);
                    res.render('dashboard', renderParams);
    
                  })
                   // commonService.sendResponse(res, 200, 200, 'Details',objvar);
                               
                });
                // } else {
                //     commonService.sendResponse(res, 500, 500, 'Some error occured: ' + error, error);
                // }
            
            }


            });
            
};

exports.getTokenBalance = function (req, res, next) {
    var renderParams = {
        layout: 'dashboard',
        title: 'Dashboard',
        constants: constants,
        user: req.session.userLogin,
       handlebarhelpers: handlebarhelpers,
        //country: countries.getData()
    };
   

    userService.getTokenBal(req,function (error, objBalance) {
    
    if (!error) {
        renderParams.objvarr = {
            objBalance :objBalance
        };
    //console.log("objBalance", obj);
    //commonService.sendResponse(res, 200, 200, 'Token Balance', objBalance);
    res.render('dashboard', renderParams);
    }    
    // } else {
    // commonService.sendResponse(res, 500, 500, 'Some error occured: ' + error, error);
    
    // }
    });
};


exports.forgotpwd = async function (req, res, next) {

    // Get posted request data for the user sign in.
    var renderParams = {
        layout: 'resetPassword',
        title: 'Dashboard',
        constants: constants,
        user: req.session.userLogin,
       handlebarhelpers: handlebarhelpers,
        //country: countries.getData()
    };
    res.render('resetPassword',renderParams);
};    
 

////////////////////////

exports.forgotpwd1 = async function (req, res, next) {
    

    try {

        userService.forgotpwd(req.body.email, function (error, emailChk) {
            console.log(error);
            if (emailChk) {
               
                if (emailChk.emailVerified == true) {
                    console.log("Hello coming 22222")
                    userService.updateNewToken(emailChk._id, function (err, updatedToken) {
                        if (updatedToken.response == 1) {
                            console.log("Coming here 3333");
                            userService.userData(emailChk._id, function (er, foundUser) {
                                /******* mail code *******/
                                console.log("found user",foundUser);
                                var templateVariable = {
                                    templateURL: "mailtemplate/forgotpassword",
                                    token: updatedToken.token,
                                    fullName: foundUser.firstname + " " + foundUser.lastname,
                                    constants: constants
                                };
                                var mailParamsObject = {
                                    templateVariable: templateVariable,
                                    to: req.body.email,
                                    subject: "Forgot Password"
                                };
                                mailer.sendMail(mailParamsObject, function (err) {
                                    if (err) {
                                        return res.status(201)
                                                .json({
                                                    status: 201,
                                                    data: "failed",
                                                    message: "Mail not sent.",
                                                    error: 1
                                                });
                                    } else {
                                        return res.status(200)
                                                .json({
                                                    status: 200,
                                                    data: "success",
                                                    message: "Mail sent Successfully.",
                                                    error: 0
                                                });
                                    }
                                });
                            });
                        } else {
                            return res.status(201)
                                    .json({
                                        status: 201,
                                        data: "failed",
                                        message: "Something went wrong.",
                                        error: 1
                                    });
                        }
                    });
                } else {
                    return res.status(201)
                            .json({
                                status: 201,
                                data: "failed",
                                message: "Please first verify your email.",
                                error: 1
                            });
                }
            } else {
                return res.status(201)
                        .json({
                            status: 201,
                            data: "failed",
                            message: "This user doesn't exist, please enter existing user.",
                            error: 1
                        });
            }
        });
    } catch (exception) {
        // Return an error response with code and message.
        return res.status(500)
                .json({
                    status: 500,
                    message: "User sign in failed. Something went wrong.",
                    error: 1
                });
    }

};
exports.resetpassword = async function (req, res, next) {

   // var token = req.params.token;
   var token = req.body.token;
    var password = req.body.password;
    console.log("hewyyy",token);
    console.log("heyy",password);
    try {

        var checkToken = await userService.checkToken(token);
        if (checkToken != null) {
        // if (!error) {
    
            // Create a new user account using user service object.            
            var updatePassword = await userService.updatePassword(token, password);
            if (updatePassword.n == 1) {
                return res.status(200)
                        .json({
                            status: 200,
                            data: "success",
                            message: "Password updated successfully.",
                            error: 0
                        });
            } else {
                return res.status(201)
                        .json({
                            status: 201,
                            data: "failed",
                            message: "Password not updated.",
                            error: 1
                        });
            }
        } else {
            return res.status(201)
                    .json({
                        status: 201,
                        data: "failed",
                        message: "Invalid reset password token",
                        error: 1
                    });
        }

    } catch (exception) {
        // Return an error response with code and message.
        return res.status(500)
                .json({
                    status: 500,
                    message: "Password not updated. Something went wrong.",
                    error: 1
                });
    }
};
exports.verifyEmail = async function (req, res, next) {
    var token = req.params.token;
    try {
        var checkToken = await userService.checkTokenn(token);
        if (checkToken != null) {
            // Create a new user account using user service object.            
            var emailVerify = await userService.updateEmailVerify(token);
            if (emailVerify) {
                var renderParams = {
                    layout: 'login',
                    title: 'Login',
                    message: "Email Verified Successfully",
                    frontConstant: frontConstant,
                    constants: constants
                }
                res.render('login', renderParams);

                // window.setTimeout(function(){
                //     window.location.href = '/users/login';
                //   }, 4000);

            } else {
                var renderParams = {
                    layout: 'login',
                    title: 'Login',
                    message: "User Not Found.",
                    frontConstant: frontConstant,
                    constants: constants
                }
                res.render('login', renderParams);
            }
        } else {
            var renderParams = {
                layout: 'login',
                title: 'Login',
                message: "Invalid Email verification token.",
                frontConstant: frontConstant,
                constants: constants
            }
            res.render('login', renderParams);
        
        }

    } catch (exception) {
        // Return an error response with code and message.
        var renderParams = {
            layout: 'login',
            title: 'Login',
            message: "Email not verified. Something went wrong.",
            frontConstant: frontConstant,
            constants: constants
        }
        res.render('login', renderParams);

    }
};
exports.resetPassword = async function (req, res, next) {
    var token = req.params.token;
    try {
        var checkToken = await userService.checkToken(token);
        if (checkToken != null) {
            var renderParams = {
                layout: 'security',
                title: 'Reset Password',
                constants: constants,
                token: token
            }
            res.render('security', renderParams);
        } else {

            var renderParams = {
                layout: 'resetPassword',
                title: 'Reset Password',
                message: "Invalid Password verification token, try again",
                frontConstant: frontConstant,
                constants: constants
            }
            res.render('resetPassword', renderParams);
            // res.redirect('Invalid Password verification token.');
        }

    } catch (exception) {
        // Return an error response with code and message.
        var renderParams = {
            layout: 'resetPassword',
            title: 'Reset Password',
            message: "Password cannot reset. Something went wrong, try again",
            frontConstant: frontConstant,
            constants: constants
        }
        res.render('resetPassword', renderParams);
       // res.send('Password cannot reset. Something went wrong.');
    }
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

    
        userService.getStatementss(req, function (error, statement) {
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
           // console.log("transaction params",renderParams);
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
                req.session.userLogin = userFound;
                console.log('', req.session.userLogin);
            
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
            var contractInstance = new web3.eth.Contract(clickcoin_artifact.abi, constants.CONTRACT_ADDRESS);

            
            truffle_connect.bountyTokens(user.address,user.tokens,function (error, objAirdrop) {

                if (!error) {
                    console.log("Success");
                    commonService.sendResponse(res, 200, 200, 'Tokens Sent');
                } else if (error == "exceed"){
                    console.log("Failed");
                    commonService.sendResponse(res, 200, 200, 'Tokens exceed the Bounty supply');
                }
                else {
                    commonService.sendResponse(res, 500, 500, 'Some error occured.', error);
                }
               
            });
};

exports.bountyTransfer = async function (req, res, next) {
    
    // console.log("admin service",commonService);
    //     console.log("admin service",adminService);
        userService.getStatementss(req, function (error, statement) {
                var renderParams = {
                    layout: 'userBounty',
                    title: 'Bounty Tokens',
                    constants: constants,
                    user: req.session.userLogin,
                handlebarhelpers: handlebarhelpers
                };
      
            len = statement.length;
            renderParams.trans = {
                t1 : statement,
                len:len       
            }
            console.log("transaction params",renderParams);
            res.render('userBounty',renderParams);
        });
};     