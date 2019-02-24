const ProjectList = require('../models/projectList.model.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

  // const projectName = new ProjectList({
  //     projectName : "test"
  // });
  //
  // projectName.save()
  //   .then(data => {
  //     console.log("added")
  //     ProjectList.find()
  //    .then(projectNames => {
  //        console.log(JSON.stringify(projectNames))
  //        res.send(projectNames);
  //    }).catch(err => {
  //        res.status(500).send({
  //            message: err.message || "Some error occurred while retrieving project names."
  //        });
  //    });
  //   }).catch(err => {
  //       res.status(500).send({
  //           message: err.message || "Some error occurred while creating the Register."
  //       });
  //   });

   //
    ProjectList.find()
   .then(projectNames => {
       // console.log(JSON.stringify(projectNames))
       res.send(projectNames);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while retrieving project names."
       });
   });
};
