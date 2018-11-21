const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
var timestamps = require('mongoose-timestamp');

var MemberSchema = new mongoose.Schema({
   
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    dob: {type: String, required: true},
    phone: {type: Number, required: true},
    country: {type: String, required: true},
    publicWalletAddress: {type: String, required: true},
    company: {type: String, required: true},
    email: {type: String, required: true},
    emailVerified: {type: Boolean, required: false},
    countryCode: {type: Number, require: true},
    accessToken:{type: String, required:false},
    email_verification_token:{type: String, required:false},
    verificationToken: {type:String,required:false},
    countryCode:{type:String, required: true},
    password: {type: String, required: false}
    // adminUsername: {type: String, required: false},
    // adminPassword :{type: String, required: false}


}, {
    collection: 'Member'
});
MemberSchema.plugin(mongoosePaginate);
MemberSchema.plugin(timestamps);
module.exports = mongoose.model('Member', MemberSchema);
