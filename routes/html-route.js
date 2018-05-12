
// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html (homepage)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // active route loads index.html (active)
  app.get("/active", function(req, res) {
    res.sendFile(path.join(__dirname, "../manager/active/index.html"));
  });

  // completed route loads index.html (completed)
  app.get("/completed", function(req, res) {
    res.sendFile(path.join(__dirname, "../manager/completed/index.html"));
  });

  // closed route loads index.html (closed)
  app.get("/closed", function(req, res) {
    res.sendFile(path.join(__dirname, "../manager/closed/index.html));
  });

  // inventory route loads index.html (inventory)
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../manager/inventory/index.html"));
  });

   // people route loads index.html (people)
   app.get("/people", function(req, res) {
    res.sendFile(path.join(__dirname, "../manager/people/index.html"));
  });

};
