const express = require('express');
const app = express();
const userController = require('./user.controller');

app.post('/addBookMark', userController.bookMark);
app.post('/signup', userController.signUp);
app.post('/socialSignUp', userController.socialSignUp);

module.exports = app;
