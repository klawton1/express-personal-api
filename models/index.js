var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

var Truck = require("./truck.js")
// module.exports.Campsite = require("./campsite.js.example");
module.exports = Truck