const express = require('express');
const storyController = require('./story.controller');
const fileSystem = require('../../middlewares/multer/multer.middleware');

const app = express();

app.get('/activeStories', storyController.activeStories);
app.get('/storyImage/:id', storyController.storyImage);

module.exports = app;
