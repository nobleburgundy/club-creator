const express = require("express");
const router = express.Router();
const club = require("../models/club.js");
const db = require("../models");

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

router.post("/api/clubs", function (req, res) {
  db.Club.create(req.body).then(function (result) {
    res.json(result);
  });
});

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
