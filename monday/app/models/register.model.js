const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
  emailId: String,
  password: String,
  userName : String
  }//,
  // {
  //   timestamps: true
  // }
);

module.exports = mongoose.model('Register', RegisterSchema);
