const express = require("express");
const router = express.Router();
const event = require("../models/events.js");
const db = require("../models");

// index, event, user, event handlebars

// show home page
router.get("/", function (req, res) {
  db.Event.findAll({}).then(function (data) {  // might need to change event to reflect the right model
    // render the values of the data with spread operator
    res.render("index", { event: [...data] });
  });
});

// show all events in api -- will need to change to show all events in a html page
router.get("/api/events", function (req, res) {
  // get route for getting all events
  const query = {};
  db.Event.findAll({}).then(function (result) { // might need to change event to reflect the right model
    res.json(result);
  });
});

// html to show which event a user is in
router.get("/api/users/:id", function (req, res) {
  db.Event.findAll({ // might need to change event to reflect the right model
    where: {
      users: req.body.users // probably need to change this reflect table/cells name
    }
  }).then(function (data) {
    res.render("users", { event: [...data] }); // will need to change this once all handlebars are done
  });
});

// View single event
router.get("/api/event/:id", function (req, res) {
  db.Event.findAll({ // might need to change event to reflect the right model
    where: {
      event_name: req.body.event_name // probably need to change thisreflect table/cells name
    }
  }).then(function (data) {
    res.render("events", { event_name: [...data] }); // will need to change this once all handlebars are done
  });
});

// Create a new event
router.post("/api/events", function (req, res) {
  // might need to change event to reflect the right model
  db.Event.create({ event_name: req.body.event_name }).then(function (result) {
    res.json(result);
  });
});

// Delete a Event
router.delete("/api/event/:id", function (req, res) {
  const condition = { id: req.params.id };
  db.Event.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export the routes for server.js
module.exports = router;
