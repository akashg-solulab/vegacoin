var express = require('express');
var router = express.Router();
var frontConstant = require('./../modules/front_constant');
var constants = require('./../modules/constants');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');
/* GET home page. */
//router.get('/', function (req, res, next) {
//    res.render('index', {title: 'Express'});
//});

router.get('/',userMiddleware.isLogin, function (req, res, next) {
    var renderParams = {
        layout: 'register',
        title: 'Register',
        frontConstant: frontConstant,
        constants: constants
    }
    res.render('register', renderParams);
});

router.get('/users/login',userMiddleware.isLogin,function (req, res, next) {
    var renderParams = {
        layout: 'login',
        title: 'Login',
        frontConstant: frontConstant,
        constants: constants
    }
    res.render('login', renderParams);
});
// router.get('/logout', userMiddleware.userSignout);


router.get('/users/dashboard',userMiddleware.authenticate,userController.getDashDetails);

var QRCode = require('qrcode')

QRCode.toDataURL(constants.CONTRACT_ADDRESS, function (err, url) {
   // console.log(url)
  })


// router.get('/users/bal', function (req, res, next) {
//     var renderParams = {
//         layout: 'dashboard',
//         title: 'Dashboard',
//         frontConstant: frontConstant,
//         constants: constants
//     }
//     res.render('dashboard', renderParams);
// });
/*
router.get('/', userMiddleware.isLogin, function (req, res, next) {
    var renderParams = {
        layout: 'login',
        title: 'Login',
        frontConstant: frontConstant,
        constants: constants
    }
    res.render('login', renderParams);
});
*/
//router.post('/register', userMiddleware.validateSignupData, userController.signup);

//router.post('/login', userController.signin);

//router.get('/logout', userMiddleware.userSignout);
/*
router.get('/register', userMiddleware.isLogin, function (req, res, next) {
    var renderParams = {
        layout: 'login',
        title: 'Register',
        frontConstant: frontConstant
    }
    res.render('register', renderParams);
});*/
// router.get('/verify-email/:token', userController.verifyEmail);
//router.get('/setting', userController.getProfile);

// router.get('/setting', userMiddleware.authenticate, userController.getProfile);
// router.get('/transactions', userMiddleware.authenticate, userController.getStatements);

// router.get('/logout', userMiddleware.userSignout);
//router.post('/forgot-password', userController.forgotpwd1);
router.get('/verify-email/:token', userController.verifyEmail);
router.get('/reset-password/:token', userController.resetPassword);


// router.get('/reset-password/:token', userController.resetPassword);



// router.get('/facebook_login', Facebook.loginRequired(), function (req, res) {
//     req.facebook.api('/me', function (err, user) {
// //        res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.send('Hello, ' + user.name + '!');
//     });
// });
module.exports = router;