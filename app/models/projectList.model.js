const mongoose = require('mongoose');

const ProjectListSchema = mongoose.Schema({
  projectName: String
});

module.exports = mongoose.model('ProjectList', ProjectListSchema);
