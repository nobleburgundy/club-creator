const express = require("express");
const router = express.Router();
const club = require("../models/club.js");
const db = require("../models");

// index, club, user, event handlebars

// show home page
router.get("/", function (req, res) {
  db.Club.findAll({}).then(function (data) {  // might need to change Club to reflect the right model
    // render the values of the data with spread operator
    res.render("index", { clubs: [...data] });
  });
});

// show all clubs in api -- will need to change to show all clubs in a html page
router.get("/api/clubs", function (req, res) {
  // get route for getting all clubs
  const query = {};
  db.Club.findAll({}).then(function (result) { // might need to change Club to reflect the right model
    res.json(result);
  });
});

// show all events in api -- will need to change to show all clubs in a html page
router.get("/api/events", function (req, res) {
  // get route for getting all clubs
  const query = {};
  db.Club.findAll({}).then(function (result) { // might need to change Club to reflect the right model
    res.json(result);
  });
});


// html to show which club a user is in
router.get("/api/users/:id", function (req, res) {
  db.Club.findAll({ // might need to change Club to reflect the right model
    where: {
      users: req.body.users // probably need to change this reflect table/cells name
    }
  }).then(function (data) {
    res.render("users", { clubs: [...data] }); // will need to change this once all handlebars are done
  });
});

// View single club
router.get("/api/clubs/:id", function (req, res) {
  db.Club.findAll({ // might need to change Club to reflect the right model
    where: {
      club_name: req.body.club_name // probably need to change this reflect table/cells name
    }
  }).then(function (data) {
    res.render("club", { club_name: [...data] }); // will need to change this once all handlebars are done
  });
});

// View single event
router.get("/api/event/:id", function (req, res) {
  db.Club.findAll({ // might need to change Club to reflect the right model
    where: {
      event_name: req.body.event_name // probably need to change thisreflect table/cells name
    }
  }).then(function (data) {
    res.render("events", { event_name: [...data] }); // will need to change this once all handlebars are done
  });
});






// Create a new club
router.post("/api/clubs", function (req, res) {
  // might need to change Club to reflect the right model
  db.Club.create({ club_name: req.body.club_name }).then(function (result) {
    res.json(result);
  });
});

// Create a new event
router.post("/api/events", function (req, res) {
  // might need to change Club to reflect the right model
  db.Club.create({ event_name: req.body.event_name }).then(function (result) {
    res.json(result);
  });
});

// Create new user
router.post("api/users", function (req, res) {
  // might need to change Club to reflect the right model
  db.Club.create({ user_name: req.body.user_name }).then(function (result) {
    res.json(result);
  });
});






// Delete a club
router.delete("/api/clubs/:id", function (req, res) {
  const condition = { id: req.params.id };
  db.Club.delete(condition, function (result) {
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
