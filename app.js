let express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose"),
    comment = require("./models/comment"),
    moment = require('moment'),
    config = require('config');

mongoose.connect(config.url);

let jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extend: true}));
app.use(express.static(__dirname + "/views"));

app.post('/api/comments', jsonParser, function (req, res) {

    let data = new comment (req.body);

    console.log(data);
    // res.json(`${req.body.name} - ${req.body.comment} - ${req.body.date}`);
    data.save().then((result) =>  {
        res.json(result);
    },
    (error) => res.status(400).send(error));

});

app.get('/api/comments', jsonParser, function (req, res) {

    comment.find().then(result => res.json(result),
        (error) => res.status(400).send(error));
});


app.listen(3000);
module.exports = app;



















