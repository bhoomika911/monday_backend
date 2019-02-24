const Register = require('../models/register.model.js');

// Create and Save a new Register
// exports.create = (req, res) => {
//   // Validate request
//     if(!req.body.emailId) {
//         return res.status(400).send({
//           status : '400',
//           message: "Email id can not be empty"
//         });
//     }
//
//     if(!req.body.password) {
//         return res.status(400).send({
//           status : '400',
//           message: "Password can not be empty"
//         });
//     }
//
//     if(!req.body.userName) {
//         return res.status(400).send({
//           status : '400',
//           message: "Username can not be empty"
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
exports.findOne = (req, res) => {
  Register.find({emailId : req.body.emailId , password : req.body.password})
    .then(register => {
        if(!register) {
            return res.status(404).send({
                message: "No user is found with  " + req.body.emailId
            });
        }
        else{
          res.status(200).send({
            status : '200',
            message : "Login successfully."
          })
        }
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No user is found with  " + req.body.emailId
            });
        }
        console.log(err)
        return res.status(500).send({
            respose : JSON.stringify(err),
            message: "Error login " + req.body.emailId
        });
    });
};
//
// // Update a register identified by the noteId in the request
// exports.update = (req, res) => {
//   // Validate Request
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "Register content can not be empty"
//         });
//     }
//
//     // Find register and update it with the request body
//     Register.findByIdAndUpdate(req.params.noteId, {
//         title: req.body.title || "Untitled Register",
//         content: req.body.content
//     }, {new: true})
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
//             message: "Error updating register with id " + req.params.noteId
//         });
//     });
// };
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