const express = require('express');
const storyController = require('./story.controller');

const app = express();

app.post('/addStory', storyController.addStory);
