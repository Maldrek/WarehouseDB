var db = require("../models");

module.exports = function(app) {
    app.get("/api/requestor", function(req, res) {
// Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.people.findAll({
        include: [db.Ticket]
      }).then(function(dbPeople) {
        res.json(dbPeople);
      });
    });
  
    app.get("/api/requestor/:id", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.people.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Ticket]
      }).then(function(dbPeople) {
        res.json(dbPeople);
      });
    });
  
    app.post("/api/requestor", function(req, res) {
      db.people.create(req.body).then(function(dbPeople) {
        res.json(dbPeople);
      });
    });
  
    app.delete("/api/people/:id", function(req, res) {
      db.people.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbPeople) {
        res.json(dbPeople);
      });
    });
  
  };
  