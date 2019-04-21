//dependencies
var path = require("path");

// html routes
module.exports = function(app) {

    //route for survey.html
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // Default home or if no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  