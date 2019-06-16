
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static(__dirname + '/public'));

require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

module.exports = app;