const express = require("express");
const router = express.Router();
const club = require("../models/club.js");
const db = require("../models");

// Club api routes
router.get("/api/clubs", function (req, res) {
  // get route for getting all clubs
  const query = {};
  db.Club.findAll({}).then(function (result) {
    res.json(result);
  });
});

router.post("/api/clubs", function (req, res) {
  db.Club.create({
    club_name: req.body.club_name,
    club_description: req.body.club_description,
    location_city: req.body.location_city,
    location_state: req.body.location_state,
    location_zip: req.body.location_zip,
    online_base_url: req.body.online_base_url,
    club_image_url: req.body.club_image_url,
    category: req.body.category,
    creator_id: req.body.creator_id,
  }).then(function (result) {
    res.json(result);
  });
});

router.delete("/api/clubs/:id", function (req, res) {
  const condition = { id: req.params.id };
  db.Club.destroy({ where: condition }, function (result) {
    console.log(result);
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
