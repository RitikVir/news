const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/news';
// mongodb://<dbuser>:<dbpassword>@ds125616.mlab.com:25616/news

const mongoOptions = { useNewUrlParser: true };
const router = require('./route/router');
const bodyParser = require('body-parser');
const key = require('./key');
const cors = require('cors');
const username = key.username;
const password = key.password;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

mongoose.connect(
  `mongodb://${username}:${password}@ds125616.mlab.com:25616/news`,
  mongoOptions,
  err => {
    if (err) throw err;
    else console.log('connected to mongodb...');
  }
);

app.listen(key.PORT, () => {
  console.log('App working on ', key.PORT);
});