// const myModule = require('../nodejsdemonpm/mymodule');

// myModule.printHelloWorld();

// console.log(myModule.name);

//import the needed packages
const express = require('express');
const ejs = require('ejs');
const path = require('path');

//create the express object
const app = express();

//set the environment variables
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || '3000';

//set the templating engine
app.set('view engine', 'ejs');

//set the assets folder
app.use('/static',express.static(path.join(__dirname, 'public')));

//route for the login page
app.get('/', (req, res)=>{
    res.render('base',{title:'Login Page'});
});

//listen to the server
app.listen(port, ()=>{
    console.log(`The server is at http://${hostname}:${port}.`);
});




