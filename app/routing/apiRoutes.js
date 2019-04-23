var friends = require("../data/friends.js");

//Routing
module.exports = function(app) {

    //return list of friends as JSON
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    //grab user input
    app.post("/api/friends", function(req, res) {
 
        // Receive user details (name, photo, scores)
        var user = req.body;
    
        // parseInt for scores
        for(var i = 0; i < user.scores.length; i++) {
          user.scores[i] = parseInt(user.scores[i]);
        }
    
        //variables to hold values for matching
        var match = 0;
        var minValue = 100;
    
        // Compare the user and each friend's scores, one set at a time
        //  whatever the difference is, add to the total difference
        for(var i = 0; i < friends.length; i++) {
          var totalDif = 0;
          for(var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDif += difference;
          }
    
          // if there is a new minimum value, change matching person
          if(totalDif < minValue) {
            match = i;
            minValue = totalDif;
          }
        }
    
        // after finding match, add user to friend array
        friends.push(user);
    
        // send to website
        res.json(friends[match]);
      });
    };