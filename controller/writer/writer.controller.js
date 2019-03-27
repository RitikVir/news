const Writer = require('../../model/writer.model');

module.exports = {
  getProfile: (req, res) => {
    try {
      Writer.findById(req.body.userId, (err, writerInfo) => {
        if (err) throw err;
        res.json({ success: true, writerInfo });
      });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: 'Error loading profile' });
    }
  }
};
