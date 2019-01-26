const User = require('../models/User');

module.exports.index = async (req, res)  => {
  res.send({
     message: 'hello world'
  });
}