//import needed packages
const express = require('express');

//create a server
const router = express();

const credential = {
    email: 'kodego@test.com',
    password: '123123'
};

//route for the login page

router.post('route/login',(req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        res.end('success');
    }else{
        res.end('invalid credentials');
    }
});

module.exports = router;

