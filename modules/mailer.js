var nodemailer = require("nodemailer");
var constants = require('../modules/constants');
var fs = require('fs');
var handlebars = require('handlebars');
var appRoot = require('app-root-path');

var transporter = nodemailer.createTransport("SMTP", {
    host: constants.MAIL_HOST,
    port: constants.MAIL_PORT,
    auth: {
        user: constants.MAIL_FROM_AUTH,
        pass: constants.MAIL_PASSWORD
    },
    tls: {rejectUnauthorized: false},
    debug: true
});

var readHTMLFile = function (path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};

var sendMail = function (mailParamsObject, callback) {
    console.log("rooot",appRoot);
    var temp = appRoot + '/views/' + mailParamsObject.templateVariable.templateURL + '.handlebars';
    console.log("sendMail-mailer.js var temp",temp);
    readHTMLFile(temp, function (err, html) {
        var template = handlebars.compile(html);
        var replacements = mailParamsObject.templateVariable;
        console.log(replacements);
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: constants.MAIL_FROM_AUTH,
            to: mailParamsObject.to,
            subject: mailParamsObject.subject,
            html: htmlToSend,
        };
        transporter.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                callback(error, null);
            } else {
                callback(null, response);
            }
        });
    });
//    var mailerOptions = {
//        to: mailParamsObject.to,
//        subject: mailParamsObject.subject
//    };
//
//    var templateVariable = mailParamsObject.templateVariable;
//
//    var finalMailerOptions = JSON.parse((JSON.stringify(mailerOptions) + JSON.stringify(templateVariable)).replace(/}{/g, ","))
//    var template = mailParamsObject.templateVariable.templateURL;
//    transporter.sendMail(template, finalMailerOptions, function (err, succ) {
//        if (err) {
//            callback(err, null);
//        }
//        callback(null, succ);
//    });
}
exports.sendMail = sendMail;