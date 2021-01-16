const express = require("express");
const router = express.Router();
const club = require("../models/club.js");
const db = require("../models");

// index, club, user, event handlebars

// html routes TODO: separate to other files
router.get("/", function (req, res) {
  db.Club.findAll({}).then(function (data) {
    // render the values of the data with spread operator
    res.render("index", { clubs: [...data] });
  });
});

// api routes - TODO: separate to other files
router.get("/api/clubs", function (req, res) {
  // get route for getting all clubs
  const query = {};
  db.Club.findAll({}).then(function (result) {
    res.json(result);
  });
});

// html to show which club user is in
router.get("/api/users/:id", function (req, res) {
  db.Club.findAll({
    where: {
      users: req.body.users // probably need to change this reflect table/cells name
    }
  }).then(function (result) {
    res.json(result) // will need to change this once all handlebars are done
  });
});

// View event
router.get("/api/event/:id", function (req, res) {
  db.Club.findAll({
    where: {
      events: req.body.events // probably need to change thisreflect table/cells name
    }
  }).then(function (result) {
    res.json(result) // will need to change this once all handlebars are done
  });
});






// Create a new club
router.post("/api/clubs", function (req, res) {
  db.Club.create({ club_name: req.body.club_name }).then(function (result) {
    res.json(result);
  });
});






// Delete a club
router.delete("/api/clubs/:id", function (req, res) {
  const condition = { id: req.params.id };
  club.delete(condition, function (result) {
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
