const express= require("express");
const router = express.Router();
const restaurantSchema = require("../model/restaurant");

// route to add restaurants to DB
router.post("/add", (req, res, next) => {
    var db = new restaurantSchema();
    var response = {};

    // Receiving data to be added to the db
    db.name = req.body.name;
    db.description = req.body.description;
    db.location.latitude = req.body.location.latitude;
    db.location.longitude = req.body.location.longitude;
    db.phone = req.body.phone;

    // Receiving offering values to be added to db
    db.offering.parking = req.body.offering.parking;
    db.offering.security = req.body.offering.security;
    db.offering.pets = req.body.offering.pets;
    db.offering.pets = req.body.offering.pets;
    db.offering.drinks = req.body.offering.drinks;
    db.offering.wifi = req.body.offering.wifi;
    db.offering.power = req.body.offering.power;

    // Receiving payment methods to be added to db
    db.paymentMethod.cash = req.body.paymentMethod.cash;
    db.paymentMethod.ath = req.body.paymentMethod.ath;
    db.paymentMethod.creditCard = req.body.paymentMethod.creditCard;
    db.paymentMethod.athMovil = req.body.paymentMethod.athMovil;
    db.paymentMethod.paypal = req.body.paymentMethod.paypal;
    db.paymentMethod.stripe = req.body.paymentMethod.stripe;

    // Recieving the schedule to be added to the db
    // Monday
    db.schedule.monday.open = req.body.schedule.monday.open;
    db.schedule.monday.closed = req.body.schedule.monday.closed;
    // Tuesday
    db.schedule.tuesday.open = req.body.schedule.tuesday.open;
    db.schedule.tuesday.closed = req.body.schedule.tuesday.closed;
    // Wednesday
    db.schedule.wednesday.open = req.body.schedule.wednesday.open;
    db.schedule.wednesday.closed = req.body.schedule.wednesday.closed;
    // Thursday
    db.schedule.thursday.open = req.body.schedule.thursday.open;
    db.schedule.thursday.closed = req.body.schedule.thursday.closed;
    // Friday
    db.schedule.friday.open = req.body.schedule.friday.open;
    db.schedule.friday.closed = req.body.schedule.friday.closed;
    //Saturday
    db.schedule.saturday.open = req.body.schedule.saturday.open;
    db.schedule.saturday.closed = req.body.schedule.saturday.closed;
    //Sunday
    db.schedule.sunday.open = req.body.schedule.sunday.open;
    db.schedule.sunday.closed = req.body.schedule.sunday.closed;

    db.save(function(err){
        if(err) {
            response = { "error": true, "message": "error sending data"};
        } else {
            response = { "error": false, message: "Data was added"};
            res.json(response);
        }
    });

});
module.exports = router;