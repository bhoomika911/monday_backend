module.exports = (app) => {
    const updates = require('../controllers/update.controller.js');

    // // Create a new Register
    // app.post('/register', register.create);

    // // Retrieve all Notes
    // app.get('/notes', notes.findAll);
    //
    // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // Update a Note with noteId
    app.put('/update/:emailId', updates.update);
    //
    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}
