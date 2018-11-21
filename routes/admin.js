var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator())
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

const adminController = require('../controllers/admin.controller');
const adminMiddleware = require('../middleware/admin.middleware');


router.get('/login',adminMiddleware.isLogin,adminController.adminLogin);
router.get('/bounty-transfer',adminMiddleware.authenticate,adminController.adminIndex);
router.get('/bounty-transactions',adminMiddleware.authenticate,adminController.adminTransactions);
//adminMiddleware.authenticate,
router.post('/adminLogin',adminController.adminLoginn);
router.post('/adminIndex', adminController.adminIndexx);
router.get('/logout', adminMiddleware.authenticate,adminMiddleware.userSignout);

module.exports = router;