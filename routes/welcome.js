// Add Express
const express = require("express");

// Initialize Express
const route = express();

// Create GET request
route.get("/welcome", (req, res) => {
  res.send("Welcome to my new route.").status(200);
});

module.exports = route;