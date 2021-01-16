const express = require("express");
const db = require("./models");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

let PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/club_controller.js");
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./controllers/html-controller.js")(app);
require("./controllers/api-controller.js")(app);

app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });
});
