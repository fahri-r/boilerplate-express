var express = require('express');
var app = express();
require('dotenv').config()

app.get("/", function(req, res) {
    app.use("/public", express.static(__dirname + "/public"));
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    var responseJson = { message: "Hello json" };

    if (process.env.MESSAGE_STYLE === "uppercase") {
        responseJson.message = responseJson.message.toUpperCase()
    }

    res.json(responseJson)
});
































 module.exports = app;
