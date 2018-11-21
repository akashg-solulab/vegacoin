const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
var timestamps = require('mongoose-timestamp');

var AdminSchema = new mongoose.Schema({
   
    
    adminUsername: {type: String, required: true},
    adminPassword :{type: String, required: true}


}, {
    collection: 'Admin'
});


AdminSchema.plugin(mongoosePaginate);
AdminSchema.plugin(timestamps);
module.exports = mongoose.model('Admin', AdminSchema);
