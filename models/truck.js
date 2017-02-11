var mongoose = require("mongoose");

var truckSchema = new mongoose.Schema({
	headChef: String,
	locations: {type: [String], default: "Check Website for Calander"},
	hours: {
		type:{
			monday: String,
			tuesday: String,
			wednesday: String,
			thursday: String,
			friday: String,
			saturday: String,
			sunday: String
		},
		default: "Check website for Calander"
	},
	website: String,
	rating: Number,
	image: String,
});

var Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;