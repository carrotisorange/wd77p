const express = require('express');
const path = require('path'); //preinstalled
const app = express();


const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

//load static assets
app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//home route
app.get('/', (req, res) => {
    res.render('base', {title:"Login System"});
});

app.listen(port, ()=>{
    console.log(`Listening to the server on http://${hostname}:${port}`);
});