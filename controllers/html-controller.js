// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
const { Op } = require("sequelize");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  // clubs page route
  app.get("/clubs", (req, res) => {
    db.Club.findAll({}).then(function (data) {
      res.render("clubs", { clubs: [...data] });
    });
  });

  // category buttons route
  app.get("/clubs/:category", (req, res) => {
    db.Club.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (data) {
      res.render("clubs", { clubs: [...data] });
    });
  });

  // specific club page
  app.get("/clubs/:id", (req, res) => {
    db.Club.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.render("club_page", data);
    });
  });

  app.get("/", (req, res) => {
    // if logged in, show joined clubs
    // if not logged in, show all clubs
    let query = "";
    if (req.user) {
      query = { include: { model: db.User, as: "Users", where: { id: req.user.id } } };
    } else {
      // if not logged in, show all clubs
      query = { limit: 4, order: [["id", "DESC"]] };
    }
    db.Club.findAll(query).then(function (data) {
      res.render("index", { clubs: [...data], loggedIn: req.user });
    });
  });

  app.get("/search", (req, res) => {
    const query = req.query.q;
    console.log("q = " + req.query.q);
    // search on club_name, club_description, or category
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
    }).then(function (data) {
      console.log("TESTING");
      res.render("clubs", { clubs: [...data] });
    });
  });
};
