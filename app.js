require('dotenv').config();
const express = require('express');
const app = express();
const port =process.env.PORT;
const hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static('public') );

app.get('/', function (req, res) {
  res.render('home', {
    name: 'Diego Granados',
    title: 'Node Webserver'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    name: 'Diego Granados',
    title: 'Node Webserver'
  })
});

app.get('/elements', function (req, res) {
  res.render('elements', {
    name: 'Diego Granados',
    title: 'Node Webserver'
  })
});


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
  console.log(`The page is serve in port localhost:${port}`)
});