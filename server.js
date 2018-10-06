const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/database");

//Port Number
const port = 3000;

const app = express();

// Connecting to the database
mongoose.connect(config.database);

// On Connecting
mongoose.connection.on("connected", () => {
    console.log("Connected to database " + config.database);
});

// On Error
mongoose.connection.on("error", (err) => {
    console.log("Error connecting to database. Log: " + err);
});

// Restaurant route
const restaurant = require("./routes/restaurant");

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

app.use("/restaurant", restaurant);

//Index Route
app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

//Server starting point
app.listen(port, () => {
    console.log("Server started on port " + port);
});