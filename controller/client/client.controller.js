const RequestPoll = require('../../model/requestPoll.model');
const RequestStory = require('../../model/requestStory.model');
const Client = require('../../model/client.model');
const Payment = require('../../model/payment.model');
const key = require('../../config/key');
var PaytmConfig = {
  mid: 'nbTZUQ26783107880967',
  key: 'dfI2CfMZK8%O@MAY',
  website: 'WEBSTAGING'
};
const checksum_lib = require('../../playground/payment/checksum');

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
  },
  startPayment: (req, res) => {
    console.log(' start payment');
    let transactionInfo = new Payment();
    transactionInfo.userId = req.body.userId;
    transactionInfo.units = req.body.amount / key.price;
    transactionInfo.save((err, data) => {
      if (err) throw err;
      var params = {};
      params['MID'] = PaytmConfig.mid;
      params['WEBSITE'] = PaytmConfig.website;
      params['CHANNEL_ID'] = 'WEB';
      params['INDUSTRY_TYPE_ID'] = 'Retail';
      params['ORDER_ID'] = data._id;
      params['CUST_ID'] = req.body.userId;
      params['TXN_AMOUNT'] = req.body.amount;
      params['CALLBACK_URL'] =
        'https://newsnode.herokuapp.com/api/client/makepayment';

      checksum_lib.genchecksum(params, PaytmConfig.key, function(
        err,
        checksum
      ) {
        console.log(err, checksum);
        var txn_url =
          'https://securegw-stage.paytm.in/theia/processTransaction';
        var form_fields = '';
        for (var x in params) {
          form_fields +=
            "<input type='hidden' name='" + x + "' value='" + params[x] + "'> ";
        }
        form_fields +=
          "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

        res.writeHead(200, { 'Content-Type': 'text/html' });
        let formString =
          '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
          txn_url +
          '" name="f1">' +
          form_fields +
          '</form><script type="text/javascript">document.f1.submit();</script></body></html>';
        res.write();
        res.end();
        res.json({ formString });
      });
    });
  },
  completePayment: (req, res) => {
    console.log('requet for complete pay   ........#####$$$$');
    console.log(req.params, req.body);
  }
};
