let express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    MongoClient = require("mongodb").MongoClient;
    comment = require("./models/comment"),
    moment = require('moment'),
    config = require('config'),
    path = require('path');

let jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extend: true}));
app.use(express.static(__dirname + "/views"));

MongoClient.connect(config.url, function (err, client) {
    if (err)
        return console.log(err);
    app.listen(3000, function () {
        console.log('We are live on 3000');
    });
    require(__dirname + '/routes/index')(app, client);
});
if
// mongoose.connect(config.url);
// app.get("/api/comment", jsonParser, function(req, res){
//     MongoClient.connect(config.url, function (err, client) {
//         client.db("commentdb").collection("comment").find().toArray(function (err, result) {
//        res.json(result);
//             client.close();
//             console.log(result);
//         })
//     });
// });

//
// app.post('/api/comment', jsonParser, function (req, res) {
//
//     let data = {
//         name: req.body.name,
//         comment: req.body.comment,
//         data: req.body.data
//     };
//     MongoClient.connect(config.url, function (err, client) {
//       client.db("commentdb").collection("comment").insertOne(data, function (err, result) {
//           if (err) {
//               return console.log(err);
//           }
//           res.json(result);
//       })
//     });
//
//     });
//
//     console.log(data);
//     // res.json(`${req.body.name} - ${req.body.comment} - ${req.body.date}`);
//     collection.insertOne(data, function (err, result) {
//         {
//             res.json(result);
//         }
//         if (err) {
//             return console.log(err);
//         }
//         console.log(result);
//         client.close();
//     })
// });
    // data.save().then((result) =>  {
    //         res.json(result);
    //     },
    //     (error) => res.status(400).send(error));

// });

// app.get('/api/comments', jsonParser, function (req, res) {
//
//     comment.find().then(result => res.json(result),
//         (error) => res.status(400).send(error));
// });


// app.listen(3000);
module.exports = app;
