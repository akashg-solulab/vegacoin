const axios = require('axios');
const constants = require('../modules/constants');

exports.sendResponse = function (res, statusCode, status, message, data = '') {
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({
        "statusCode": status,
        "message": message,
        "data": data
    }));
    res.end();
}
//console.log("heeeee",exports);