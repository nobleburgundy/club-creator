const express = require("express");
const router = express.Router();
const club = require("../models/club.js");
const db = require("../models");
const { Op } = require("sequelize");

// Club api routes
router.get("/api/clubs", function (req, res) {
  // get route for getting all clubs
  // User model has a scope 'withoutPassword' to prevent passing password to client
  db.Club.findAll({ include: db.User.scope("withoutPassword") }).then(function (result) {
    res.json(result);
  });
});

// Get clubs by user id
router.get("/api/clubs/user/:id", function (req, res) {
  db.Club.findAll({
    include: { model: db.User.scope("withoutPassword"), as: "Users", where: { id: req.params.id } },
  }).then(function (result) {
    res.json(result);
  });
});

// Get club by club id
router.get("/api/clubs/:id", function (req, res) {
  db.Club.findOne({
    where: { id: req.params.id },
  }).then(function (result) {
    res.json(result);
  });
});

// Get clubs by search term
router.get("/api/search", function (req, res) {
  const query = req.query.q;
  // case insensitve search on club_name, club_description, or category
  db.Club.findAll({
    where: {
      [Op.or]: [
        {
          club_name: { [Op.like]: `%${query}%` },
        },
        {
          club_description: { [Op.like]: `%${query}%` },
        },
        {
          category: { [Op.like]: `%${query}%` },
        },
      ],
    },
  }).then(function (result) {
    res.json(result);
  });
});

// Create a new club
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

// updating a club by id
router.put("/api/clubs/:id", function (req, res) {
  let condition = { id: req.params.id };

  db.Club.update(
    {
      club_name: req.body.club_name,
      club_description: req.body.club_description,
      location_city: req.body.location_city,
      location_state: req.body.location_state,
      location_zip: req.body.location_zip,
      online_base_url: req.body.online_base_url,
      club_image_url: req.body.club_image_url,
      category: req.body.category,
      creator_id: req.body.creator_id,
    },
    {
      where: condition,
    }
  ).then(function (result) {
    res.json(result);
  });
});

// Join Club Route
// club_id in url param
// user_id in body
router.post("/api/clubs/join/:id", function (req, res) {
  const condition = { id: req.params.id };
  console.log(`user_id = ${req.body.user_id}\nclub_id = ${req.params.id}`);

  db.JoinedClubs.create({
    club_id: req.params.id,
    user_id: req.body.user_id,
  })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (error) {
      res.status(400).json(error);
    });
});

// api route for delete club by id
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
