const express = require('express');
const bodyParser = require('body-parser');// initialize our express app
const mongoose = require('mongoose')
const app = express();

const state = require('./routes/stateroute'); 
const countrie = require('./routes/countrieroute');// Imports routes for the products
mongoose.connect('mongodb://localhost:27017/countrie',{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => console.log('Connected to MongoDB...'))
        .catch((err) => console.log('Error connecting to MongoDB...', err));


app.use('/', countrie);
//app.get('/', (request, response) => {
   // response.send('/ rout, Hello Word');
 // });
 app.use('/', state);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});