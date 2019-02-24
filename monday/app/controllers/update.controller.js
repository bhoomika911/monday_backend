const Register = require('../models/register.model.js');

// Create and Save a new Register
// exports.create = (req, res) => {
//   // Validate request
//     if(!req.body.emailId) {
//         return res.status(400).send({
//
//             message: "Email id can not be empty"
//         });
//     }
//
//     if(!req.body.password) {
//         return res.status(400).send({
//             message: "Password can not be empty"
//         });
//     }
//
//     if(!req.body.userName) {
//         return res.status(400).send({
//             message: "Username can not be empty"
//         });
//     }
//
//     if(req.body.emailId && req.body.password && req.body.userName){
//       // Create a Register
//       const register = new Register({
//           emailId: req.body.emailId || "Untitled Register",
//           password: req.body.password,
//           userName : req.body.userName
//       });
//
//       // Save Register in the database
//       register.save()
//       .then(data => {
//           res.send(data);
//       }).catch(err => {
//           res.status(500).send({
//               message: err.message || "Some error occurred while creating the Register."
//           });
//       });
//     }
// };

// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
//   Register.find()
//    .then(notes => {
//        res.send(notes);
//    }).catch(err => {
//        res.status(500).send({
//            message: err.message || "Some error occurred while retrieving notes."
//        });
//    });
// };
//
// // Find a single register with a noteId
// exports.findOne = (req, res) => {
//   Register.findById(req.params.noteId)
//     .then(register => {
//         if(!register) {
//             return res.status(404).send({
//                 message: "Register not found with id " + req.params.noteId
//             });
//         }
//         res.send(register);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Register not found with id " + req.params.noteId
//             });
//         }
//         return res.status(500).send({
//             message: "Error retrieving register with id " + req.params.noteId
//         });
//     });
// };
//
// Update a register identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
    if(!req.body.password && !req.body.userName && !eq.body.emailId) {
        return res.status(400).send({
            message: "Body can not be empty"
        });
    }

    let newData = {};

    if(req.body.password){
      newData.password = req.body.password
    }

    if(req.body.userName){
      newData.userName = req.body.userName
    }

    if(req.body.emailId){
      newData.emailId = req.body.emailId
    }
    console.log(newData);
    console.log(req.params.emailId);

    // Find register and update it with the request body
    Register.updateOne({ "emailId" : req.params.emailId}, {$set : newData})
    .then(register => {
        if(!register) {
            return res.status(404).send({
                message: "Register not found with id " + req.params.emailId,
                data : register
            });
        }
        res.send({
          status : '200',
          data : register
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Register not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating register with id " + req.params.noteId
        });
    });
};
//
// // Delete a register with the specified noteId in the request
// exports.delete = (req, res) => {
//   Register.findByIdAndRemove(req.params.noteId)
//     .then(register => {
//         if(!register) {
//             return res.status(404).send({
//                 message: "Register not found with id " + req.params.noteId
//             });
//         }
//         res.send({message: "Register deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Register not found with id " + req.params.noteId
//             });
//         }
//         return res.status(500).send({
//             message: "Could not delete register with id " + req.params.noteId
//         });
//     });
// };
