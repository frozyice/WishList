const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./models/db');

const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoute);
app.use('/admin', adminRoute);

app.listen(process.env.PORT || port, function(){
    console.log("Server has started.");
});

