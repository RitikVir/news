const Path = require('path');
const Story = require('../../model/story.model');
const Writer = require('../../model/writer.model');

module.exports = {
  activeStories: (req, res) => {
    try {
      Story.find({ isActive: true }, (err, stories) => {
        if (err) throw err;
        res.json(stories);
      });
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  },

  storyImage: (req, res) => {
    res.sendFile(Path.resolve(`${__dirname}/../../assets/${req.params.id}`));
  }
};
