var mongoose = require('mongoose');

//User model
//email - required + trim + set type + min length of 1

var User =mongoose.model('User', {
    email: { //email property
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};