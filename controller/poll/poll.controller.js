const Poll = require('../../model/poll.model');

const getPolls = async (req, res) => {
    console.log(req.body);
    let query = req.body;
    let result = await Poll.find(query);
    let count = await Poll.count(query);
    res.status(200).json({ count, result });
}



module.exports = {
    getPolls
};
