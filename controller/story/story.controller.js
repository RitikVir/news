const Story = require('../../model/story.model');
const Writer = require('../../model/writer.model');

module.exports = {
  addStory: (req, res) => {
    let newStory = new Story();
    newStory.heading = req.body.heading;
    newStory.detail = req.body.detail;
    newStory.imageUrl = req.files.imageUrl[0].filename;
    newStory.authorId = req.body.authorId;
    newStory.authorRole = req.body.authorRole;
    newStory.views = req.body.views;
    newStory.storyUrl = req.body.storyUrl;
    newStory.isActive = true;

    newStory.save(err => {
      if (err) throw err;
      try {
        Writer.findByIdAndUpdate(
          req.body.authorId,
          { $inc: { storyCount: 1 } },
          err => {
            if (err) throw err;
            res.json({ success: true, message: 'Story added successfully' });
          }
        );
      } catch (e) {
        res.json({ success: false, message: 'Error adding story' });
      }
    });
  }
};
