const express = require('express');
const app = express();
const userController = require('./user.controller');

app.post('/addBookMark', userController.bookMark);

module.exports = app;
