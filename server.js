// Load the packages to read and write
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8070;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/html-routes.js")(app);
require("./routes/requestor-api-routes.js")(app);
require("./routes/tickets-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

