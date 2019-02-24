module.exports = (app) => {
    const ProjectList = require('../controllers/projectList.controller.js');
    app.get('/getProjectName', ProjectList.findAll);
}
