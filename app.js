const express = require('express');
const bodyParser = require('body-parser');// initialize our express app
const app = express();

const countrie = require('./routes/countrieroute'); // Imports routes for the products


app.use('/', countrie);
//app.get('/', (request, response) => {
   // response.send('/ rout, Hello Word');
 // });

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});