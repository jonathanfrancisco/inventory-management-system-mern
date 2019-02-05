const User = require('../models/User');

module.exports.login = async (req, res)  => {

}

module.exports.register = async (req, res) => {

   const newUser = req.body;
   
   try {
      const result =  await User.register(newUser);
      res.send({
         result
      });
   } catch(err) {
      res.send({
         errors: err.data
      });
   }

}
