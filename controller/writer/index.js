const express = require('express');
const writerController = require('./writer.controller');
const fileSystem = require('../../middlewares/multer/multer.middleware');

const app = express();

app.post('/profile', writerController.getProfile);
app.post('/addStory', fileSystem.fileUploads, writerController.addStory);
app.post('/addPoll', fileSystem.fileUploads, writerController.addPoll);
module.exports = app;
