const mongoose = require('mongoose');

const ProjectListSchema = mongoose.Schema({
  projectName: String
  // content: String
  }//,
  // {
  //   timestamps: true
  // }
);

module.exports = mongoose.model('ProjectList', ProjectListSchema);
