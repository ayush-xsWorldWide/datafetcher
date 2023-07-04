const app = require('express')();

//controller 
const ProductController = require('../controller/fetchdata.controller');

app.get('/health',(req,res)=>{
    return res.send("I am up and fine!");
});

app.post('/set', ProductController.getData);

app.get('/data', ProductController.fetchData);

module.exports = app;