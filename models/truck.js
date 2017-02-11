var mongoose = require("mongoose");

var truckSchema = new mongoose.Schema({
	type: String,
	locations: Array,
	hours: String,
	website: String,
	ratings: Number
});

var Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;