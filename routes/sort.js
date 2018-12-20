let bodyParser = require("body-parser"),
    jsonParser = bodyParser.json();

module.exports = function (app, client) {
    app.get("/api/comment", jsonParser, function (req, res) {
        client.db("commentdb").collection("comment").find().toArray(function (err, result) {
         if (err) return console.log(err);
         if ()
        })
    });
};