let bodyParser = require("body-parser"),
    jsonParser = bodyParser.json();

module.exports = function (app, client) {
    app.get("/api/comment", jsonParser, function(req, res){
            client.db("commentdb").collection("comment").find().toArray(function (err, result) {
                res.json(result);
                console.log(result);
            })
    });

    app.post('/api/comment', jsonParser, function (req, res) {

        let data = {
            name: req.body.name,
            comment: req.body.comment,
            data: req.body.data
        };
            client.db("commentdb").collection("comment").insertOne(data, function (err, result) {
                if (err) {
                    return console.log(err);
                }
                res.json(result);
            })
    });
};