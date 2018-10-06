const mongoose = require("mongoose");

var mongoSchema = mongoose.Schema;

var restaurantSchema =  new mongoSchema({
    name: String,
    description: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    phone: String,
    offering: {
        parking: Boolean,
        security: Boolean,
        pets: Boolean,
        drinks: Boolean,
        wifi: Boolean,
        power: Boolean
    },
    paymentMethod: {
        cash: Boolean,
        ath: Boolean,
        creditCard: Boolean,
        athMovil: Boolean,
        paypal: Boolean,
        stripe: Boolean
    },
    schedule: {
        monday: {
            open: String,
            closed: String
        },
        tuesday: {
            open: String,
            closed: String
        },
        wednesday: {
            open: String,
            closed: String
        },
        thursday: {
            open: String,
            closed: String
        },
        friday: {
            open: String,
            closed: String
        },
        saturday: {
            open: String,
            closed: String
        },
        sunday: {
            open: String,
            closed: String
        }
    }
}, {collection: "restaurant"});

module.exports = mongoose.model("restaurant", restaurantSchema);