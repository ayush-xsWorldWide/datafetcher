const mongoose = require('mongoose');

exports.connectionMethod = ()=>{
    mongoose.connect(`${process.env.DB_SECRET}`).then(()=>{
        console.log("Connected to the database!");
    });
}