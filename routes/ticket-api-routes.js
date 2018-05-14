// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the tickets
  app.get("/api/ticket", function(req, res) {
    var query = {};
    if (req.query.requestor_id) {
      query.requestorId = req.query.requestor_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Requestor
    db.Ticket.findAll({
      where: query,
      include: [db.Requestor]
    }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // Get route for retrieving a single Ticket
  app.get("/api/ticket/:incident_id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Requestor
    db.Ticket.findOne({
      where: {
        incident_id: req.params.incident_id
      },
      include: [db.Requestor]
    }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // POST route for saving a new ticket
  app.post("/api/ticket", function(req, res) {
    db.Ticket.create(req.body).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // DELETE route for deleting ticket
  app.delete("/api/ticket/:id", function(req, res) {
    db.ticket.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // PUT route for updating ticket
  app.put("/api/ticket", function(req, res) {
    db.ticket.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });
};
