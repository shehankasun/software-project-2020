


const mongoose = require('mongoose');


var userModel = mongoose.model('User',{
    name : {type :String},
    email : {type :String},
    password :{type: String},
    isAdmin:{ type: Boolean, default: false}
   


});
module.exports = { userModel };