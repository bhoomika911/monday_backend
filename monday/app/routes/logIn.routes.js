module.exports = (app) => {
    const logIn = require('../controllers/logIn.controller.js');

    // Create a new Register
    app.post('/logIn', logIn.findOne);

    // // Retrieve all Notes
    // app.get('/notes', notes.findAll);
    //
    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}
