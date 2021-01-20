// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.render("login");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/index");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/index", (req, res) => {
    // This will render only the clubs the user belongs to on the home "index" page (also / since redirect is in-place in html-controller)
    // req.user holds the user information after login
    let query = "";
    if (req.user) {
      query = { include: { model: db.User, as: "Users", where: { id: req.user.id } } };
    } else {
      // if not logged in, show all clubs
      query = {};
    }
    db.Club.findAll(query).then(function (data) {
      res.render("index", { clubs: [...data] });
    });
  });
};
