

//to import express

const express = require('express');

const app = express();

const catalogcontroller = require('./controllers/catalogcontroller');

catalogcontroller(app);

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.listen(3000);