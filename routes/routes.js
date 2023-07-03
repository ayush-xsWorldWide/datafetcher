const app = require('express')();

//controller 
const ProductController = require('../controller/fetchdata.controller');

app.get('/health',(req,res)=>{
    return res.send("I am up and fine!");
});

app.get('/data', ProductController.fetchData);

module.exports = app;