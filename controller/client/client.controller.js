const RequestPoll = require('../../model/requestPoll.model');
const RequestStory = require('../../model/requestStory.model');
const Client = require('../../model/client.model');
const Payment = require('../../model/payment.model');
const qs = require('querystring');
const key = require('../../config/key');
const http = require('http');

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
        'http://newsnode.herokuapp.com/api/client/completepayment';

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
          '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" id="f1" action="' +
          txn_url +
          '" name="f1">' +
          form_fields +
          '</form><script type="text/javascript">document.f1.submit();alert("Going Out!");</script></body></html>';
        res.write(JSON.stringify({ formString: formString }));
        res.end();
      });
    });
  },
  completePayment: (req, res) => {
    console.log('requet for complete pay   ........#####$$$$', req.body);
    var body = '';

    body = req.body;

    console.log('came at cp 1');
    var html = '';
    var post_data = qs.parse(body);
    console.log('Callback Response: ', post_data, '\n');
    html += '<b>Callback Response</b><br>';
    for (var x in post_data) {
      html += x + ' => ' + post_data[x] + '<br/>';
    }
    html += '<br/><br/>';
    var checksumhash = post_data.CHECKSUMHASH;
    console.log('came at cp 2');
    var result = checksum_lib.verifychecksum(
      post_data,
      PaytmConfig.key,
      checksumhash
    );
    console.log('Checksum Result => ', result, '\n');
    html += '<b>Checksum Result</b> => ' + (result ? 'True' : 'False');
    html += '<br/><br/>';

    var params = { MID: PaytmConfig.mid, ORDERID: post_data.ORDERID };
    console.log('came at cp 3', params);
    checksum_lib.genchecksum(params, PaytmConfig.key, function(err, checksum) {
      params.CHECKSUMHASH = checksum;
      post_data = 'JsonData=' + JSON.stringify(params);

      var options = {
        hostname: 'securegw-stage.paytm.in', // for staging
        // hostname: 'securegw.paytm.in', // for production
        port: 443,
        path: '/merchant-status/getTxnStatus',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'Content-Length': post_data.length
        }
      };

      // Set up the request
      var response = '';
      var post_req = http.request(options, function(post_res) {
        post_res.on('data', function(chunk) {
          response += chunk;
          console.log('Got response.......', response);
        });

        post_res.on('end', function() {
          console.log('S2S Response: ', response, '\n');

          var _result = JSON.parse(response);
          html += '<b>Status Check Response</b><br>';
          for (var x in _result) {
            html += x + ' => ' + _result[x] + '<br/>';
          }

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(html);
          res.end();
        });
      });
      console.log('came at cp end');
      // post the data
      post_req.write(post_data);
      post_req.end();
    });
  }
};
