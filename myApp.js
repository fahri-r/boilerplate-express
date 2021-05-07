var express = require('express');
var app = express();

app.get("/", function(req, res) {
    app.use("/public", express.static(__dirname + "/public"));
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
});
































 module.exports = app;
