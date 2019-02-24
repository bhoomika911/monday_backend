const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// create express app
const app = express();

mongoose.Promise = global.Promise;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('./app/routes/projectList.routes.js')(app);
// require('./app/routes/register.routes.js')(app);
// require('./app/routes/logIn.routes.js')(app);
// require('./app/routes/update.routes.js')(app);

// database connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Monday application."});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
