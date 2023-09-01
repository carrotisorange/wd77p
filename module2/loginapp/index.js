//import the needed packages
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
// const router = require('./router');

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

//specify the routers
// app.use('/route', router);

//route to display the login page
app.get('/', (req, res)=>{
    res.render('login',{title:'Login Page'});
});

const credential = {
    email: 'kodego@test.com',
    password: '123123'
};

//route for authenticating a user
app.post('/login',(req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        res.redirect('/dashboard');
    }else{
        res.end('invalid credentials');
    }
});

//route for the dashboard
app.get('/dashboard',(req, res)=>{
    res.render('dashboard',{title:'Dashboard', user: 'Andy'});
});

//listen to the server
app.listen(port, ()=>{
    console.log(`The server is at http://${hostname}:${port}.`);
});




