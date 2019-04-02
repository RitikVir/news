const express = require('express');
const app = express();
const loginController = require('./login.controller');

app.post('/', loginController.doLogin);
app.get(
  '/checkAlreadyRegistered/:email',
  loginController.checkAlreadyRegistered
);

module.exports = app;
