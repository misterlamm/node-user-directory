const express = require('express');
const mustacheExpress = require('mustache-express')

const usrData = require('./data')

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'));

app.get('/', function (req, res) {

    res.render('users', usrData)

});

app.get('/:userInfo', (req, res) => {

var user = usrData.users[req.params.userInfo - 1]

res.render('profile', user)

 });

app.post('/profile', function(req, res) {
    res.render('profile', usrData)
});




app.listen(3000)