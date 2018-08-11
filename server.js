var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var reservations = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/reservation", function(req, res) {
    return res.json(characters);
});

app.get("/api/reservation/:reservation", function(req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for(let i = 0; i < reservations.length; i++) {
        if(chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
    return res.json(false);
});

app.post("api/reservations", function(req, res) {

    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);

    reservations.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});