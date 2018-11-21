const express = require('express');
var cors = require('cors')

var app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');
const mailer = require('express-mailer');
const mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');
var path = require('path');
var constants = require('./modules/constants');
var handleBarHelpers = require('./modules/handlebarhelpers');
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKey = constants.PRIV_KEY; // raw private key
const infuraKey = constants.INFURA_KEY;
var cors = require('cors');
var users = require('./routes/users');
var index = require('./routes/index');
var admin = require('./routes/admin');
var session = require('express-session');
var moment = require('moment');
var expressValidator = require('express-validator');

app.use(cors())

// var server = require('http').createServer();
// var io = require('socket.io')(server);
app.set('trust proxy', 1);
app.use(session({
    secret: 'Native-wallet',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false,
        maxAge: 1200000
    }
}));

// app.use(function(req,res,next) {
//     res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//     next();
// })
// app.use(function(req, res, next) {
//     console.log("req.session.userLogin",req.session.userLogin);
//     if (req.session.userLogin == undefined)
//     {   
//         console.log("heyyyyyyyy");
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     }
       
//     next();
// });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(cors());

// Get the API routes.

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

mongoose.connect('mongodb://127.0.0.1:27017/vegacoin', option)
//mongoose.connect('mongodb://clicktool:clicks9vwjvjs@13.59.116.126:27017/clicktool')
        .then(() => {
            console.log(`Succesfully Connected to the Mongodb Database`)
        })
        .catch(() => {
            console.log(`Error Connecting to the Mongodb Database at URL : mongodb://clicktool:clicks9vwjvjs@13.59.116.126:27017/clicktool`)
        });
require('./models/Member');

// Create `ExpressHandlebars` instance with a default layout.
var hbs = exphbs.create({
    extname: '.handlebars',
    defaultLayout: 'layout',
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'views/partials/'
    ],
    helpers: handleBarHelpers.helperFunction

});

Handlebars.registerHelper('formatDate', function(date){
    return moment.unix(date).format("DD-MMM-YY hh:mm a");
  });

// creating routes.
app.use('/', express.static('public',{redirect:false}));
app.use('/', index);
app.use('/users', users);
//app.use('/admin', express.static('public'));
app.use('/admin',admin);

app.get('*', function(req, res){
    res.send('404, Page Not Found', 404);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine(hbs.extname, hbs.engine);
//console.log("hff",hbs.engine)
app.set('view engine', hbs.extname);

// app.get('/wallet', (req,res)=>{
//     truffle_connect.func(function(answer){
//         res.send(answer);
//     })
// });

// mailer configuration



// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        let namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

mailer.extend(app, {
    from: constants.MAIL_FROM,
    host: constants.MAIL_HOST, // hostname 
    secureConnection: constants.MAIL_SECURE, // use SSL 
    port: constants.MAIL_PORT, // port for secure SMTP 
    transportMethod: constants.MAIL_METHOD, // default is SMTP. Accepts anything that nodemailer accepts 
    auth: {
        user: constants.MAIL_FROM_AUTH,
        pass: constants.MAIL_PASSWORD
    }
});

app.listen(port, () => {

    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
        // Use Mist/MetaMask's provider
        truffle_connect.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        //truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/c4XYujMRtM9w5yfojsAb"));
        truffle_connect.web3 = new HDWalletProvider(privKey, "https://ropsten.infura.io/" + infuraKey);
//        truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    console.log("Express Listening at http://localhost:" + port);

});
