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
      if (clientData.pollRemaining <= 0) {
        res
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
  requestStory: (req, res) => {},
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
