const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/news';
// mongodb://<dbuser>:<dbpassword>@ds125616.mlab.com:25616/news

const mongoOptions = { useNewUrlParser: true };
const router = require('./route/router');
const bodyParser = require('body-parser');
const key = require('./config/key');
const cors = require('cors');
const username = key.username;
const password = key.password;
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'newspaper')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'newspaper', 'index.html'));
});
console.log('mongo username', key.username);
console.log(' mongo pass', key.password);

mongoose.connect(
  `mongodb://${username}:${password}@ds125616.mlab.com:25616/news`,
  mongoOptions,
  err => {
    if (err) {
      console.log('hello', err);
      throw err;
    } else console.log('connected to mongodb...');
  }
);

app.listen(key.PORT, () => {
  console.log('App working on ', key.PORT);
});
