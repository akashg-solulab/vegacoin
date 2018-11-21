var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator())
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');

/* GET home page. */
router.post('/dashboard', userMiddleware.authenticate, userController.getDashDetails);

//userMiddleware.authenticate, userMiddleware.checkMnemonicSession,

router.post('/login', userController.login);

//router.post('/bal', userMiddleware.authenticate,userController.getTokenBalance);

router.post('/register', userMiddleware.validateSignupData, userController.signup);

router.get('/setting', userMiddleware.authenticate, userController.getProfile,userController.editProfile);
router.get('/transactions', userMiddleware.authenticate, userController.getStatements);
 router.get('/user-bounty', userMiddleware.authenticate, userController.bountyTransfer);

//router.get('/logout', userMiddleware.userSignout);
router.post('/edit-profile',userMiddleware.authenticate, userController.editProfile);

router.get('/forgot-password', userController.forgotpwd);
router.post('/forgot-password-send', userController.forgotpwd1);
router.post('/reset-password', userController.resetpassword);
//userMiddleware.authenticate, 
//router.post('/setting', userMiddleware.authenticate, userController.getProfile);
router.get('/verify-email/:token',userMiddleware.isLogin, userController.verifyEmail);
router.get('/reset-password/:token', userController.resetPassword);
router.get('/logout', userMiddleware.authenticate,userMiddleware.userSignout);

// router.get('/adminLogin',userController.adminLogin);
// router.get('/adminIndex',userMiddleware.authenticate,userController.adminIndex);
// router.get('/adminTransactions',userMiddleware.authenticate,userController.adminTransactions);
// //userMiddleware.authenticate,
// router.post('/adminLogin',userController.adminLoginn);
// router.post('/adminIndex', userController.adminIndexx);
// router.get('/adminLogout', userMiddleware.userSignout);


module.exports = router;