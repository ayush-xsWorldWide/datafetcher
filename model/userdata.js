const mongoose = require('mongoose');

const userdata = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    screenshot:{
        type: String
    },
    createdDate:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("userdata", userdata);