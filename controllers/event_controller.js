const express = require("express");
const router = express.Router();
const event = require("../models/events.js");
const db = require("../models");

// show all events in api -- will need to change to show all events in a html page
router.get("/api/events", function (req, res) {
  // get route for getting all events
  const query = {};
  db.Event.findAll({}).then(function (result) { // might need to change event to reflect the right model
    res.json(result);
  });
});

// View single event
router.get("/api/event/:id", function (req, res) {
  db.Event.findOne({ 
    where: {
      id: req.params.id 
    }
  }).then(function (data) {
    res.json(data); 
  });
});

// Create a new event
router.post("/api/events", function (req, res) {
  // might need to change event to reflect the right model
  db.Event.create({ 
    event_name: req.body.event_name,
    date_time: req.body.date_time,
    location_city: req.body.location_city,
    location_state: req.body.location_state,
    location_zip: req.body.location_zip,
    location_url: req.body.location_url,
    category: req.body.category,
    event_description: req.body.event_description
   }).then(function (result) {
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
