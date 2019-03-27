const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/news';
const mongoOptions = { useNewUrlParser: true };
const router = require('./route/router');
const bodyParser = require('body-parser');
const key = require('./key');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

mongoose.connect(url, mongoOptions, err => {
  if (err) throw err;
  else console.log('connected to mongodb...');
});

app.listen(key.PORT, () => {
  console.log('App working on ', key.PORT);
});
