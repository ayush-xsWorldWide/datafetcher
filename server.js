const express = require('express');
const app = express();
const cors = require('cors');
const { connectionMethod } = require('./config/db');
require('dotenv').config();
const routes = require('./routes/routes');

app.set('view engine','ejs');

app.use(express.json());
app.use(cors());
app.use('/',routes);

app.listen(process.env.PORT,()=>{
    console.log(`Connected to the database port ${process.env.PORT}`);
    // connect to db
    connectionMethod();
})