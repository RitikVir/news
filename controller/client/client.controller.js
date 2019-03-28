const RequestPoll = require('../../model/requestPoll.model');
const RequestStory = require('../../model/requestStory.model');
const Client = require('../../model/client.model');

module.exports = {
  requestPoll: (req, res) => {
    console.log('Request for poll came ');

    const RequestPollInfo = new RequestPoll({
      heading: req.body.heading,
      detail: req.body.detail,
      authorId: req.body.authorId
    });
    Client.findById(req.body.authorId, (err, clientData) => {
      if (err) throw err;
      console.log(req.files);
      if (clientData.pollRemaining <= 0) {
        return res
          .status(200)
          .send({ status: false, _id: '', comment: 'Pls Recharge ur account' });
      }
      RequestPollInfo.save((nerr, data) => {
        if (nerr) throw nerr;
        Client.findByIdAndUpdate(
          req.body.authorId,
          { $set: { pollRemaining: clientData.pollRemaining - 1 } },
          { new: true },
          (perr, result) => {
            if (perr) throw perr;
            console.log('Request Added');
            res
              .status(200)
              .send({ status: true, _id: result._id, comment: 'Added' });
          }
        );
      });
    });
  },
  requestStory: (req, res) => {
    let RequestInfo = new RequestStory();
    RequestInfo.heading = req.body.heading;
    RequestInfo.detail = req.body.detail;
    RequestInfo.imageUrl = req.files.imageUrl[0].filename;
    RequestInfo.storyUrl = req.body.storyUrl;
    RequestInfo.authorId = req.body.authorId;
    Client.findById(req.body.authorId, (err, data) => {
      if (err) throw err;
      if (data.storyRemaining <= 0) {
        return res.status(200).json({ status: false });
      }
      Client.findByIdAndUpdate(
        req.body.authorId,
        { $inc: { storyRemaining: -1 } },
        (cerr, data) => {
          if (cerr) throw cerr;
          console.log(data);
          RequestInfo.save((serr, response) => {
            if (serr) throw serr;
            console.log(response);
            res.status(200).send({ status: true });
          });
        }
      );
    });
  },
  addPollImage: (req, res) => {
    RequestPoll.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          imageUrl: req.files.imageUrl[0].filename
        }
      },
      { new: true },
      (err, data) => {
        if (err) throw err;
        console.log(data);
        res.status(200).send({ status: true });
      }
    );
  }
};
