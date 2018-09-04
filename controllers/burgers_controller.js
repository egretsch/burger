var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Provides they get route to receive the main data to be present on the main page as well as the route for the main page
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// Allows us to post a new burger into the database
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
      req.body.burger_name
  ], function(data) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

// Allows us to change the burger from true to false
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
