//import the needed packages
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session')
 
const router = require('./router');

//create the server
const app = express();

//set the environment variables
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || '3000';

//set the templating engine
app.set('view engine', 'ejs');

//set the folder to access the static assets
app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/assets',express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//configure the session
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}));

//specify the routers
app.use('/', router);

//listen to the server
app.listen(port, ()=>{
    console.log(`The server is at http://${hostname}:${port}.`);
});




