const Story = require('../../model/story.model');

module.exports = {
  addStory: (req, res) => {
    let newStory = Story(req.body);
    try {
      newStory.save(err => {
        if (err) throw err;
        res.json({ success: true, message: 'Story added successfully' });
      });
    } catch (e) {
      res.json({ success: false, message: 'Error adding story' });
      console.log(e);
    }
  }
};
