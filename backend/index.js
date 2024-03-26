const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require('./config/db');
const routes = require('./routes/index');
const port = 3000;
const cors = require( 'cors' );

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'))
app.use('/' , routes);

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`)
})