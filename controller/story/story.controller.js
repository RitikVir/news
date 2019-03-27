const Story = require('../../model/story.model');
const Writer = require('../../model/writer.model');

module.exports = {
  addStory: (req, res) => {
    let newStory = Story(req.body);
    try {
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
    } catch (e) {
      res.json({ success: false, message: 'Error adding story' });
      console.log(e);
    }
  }
};
